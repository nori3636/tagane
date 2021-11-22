<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth, db, provider } from '$lib/firebase';
	import { user } from '$lib/stores/user';
	import { signInWithPopup } from 'firebase/auth';
	import { doc, getDoc, setDoc } from 'firebase/firestore';

	async function existDb() {
		try {
			if ($user === undefined) return;
			const Ref = doc(db, 'fossil', $user.id);
			const docSnap = await getDoc(Ref);
			return docSnap.exists();
		} catch (e) {
			console.log(e);
			return false;
		}
	}

	async function add() {
		if ($user === undefined) return;
		const Ref = doc(db, 'fossil', $user.id);
		await setDoc(Ref, {
			ammmo: false,
			deino: false,
			ovi: false,
			ples: false,
			poly: false,
			tyranno: false
		});
	}
	async function loginWithGoogle() {
		return signInWithPopup(auth, provider)
			.then(() => goto('/qr'))
			.then(() => existDb())
			.then((alreadyExistDb) => {
				if (!alreadyExistDb) {
					console.log('exist db!');
				} else {
					return add();
				}
			})
			.catch(console.log);
	}
</script>

<div class="top center high">
	<div width="50%" class="center top">
		<img src="/tagane_black.png" alt="logo" width="50%" />
		<img
			on:click={loginWithGoogle}
			src="/login-with-google.png"
			alt="Login With Google"
			width="50%"
		/>
	</div>
</div>
