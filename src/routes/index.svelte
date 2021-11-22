<script lang="ts">
	import { goto } from '$app/navigation';
	import { db } from '$lib/firebase';
	import { user as userStore } from '$lib/stores/user';
	import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { doc, getDoc, setDoc } from 'firebase/firestore';

	async function exitdb() {
		try {
			if ($userStore === undefined) return;
			const Ref = doc(db, 'fossil', $userStore.id);
			const docSnap = await getDoc(Ref);
			return docSnap.exists();
		} catch (e) {
			console.log(e);
			return false;
		}
	}

	async function add() {
		if ($userStore === undefined) return;
		const Ref = doc(db, 'fossil', $userStore.id);
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
		try {
			const auth = getAuth();
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider).then(() => {
				goto('/qr').then(() => {
					if (!exitdb()) {
						add();
					} else {
						console.log('exit db!');
					}
				});
			});
		} catch (e) {
			console.log(e);
		}
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
