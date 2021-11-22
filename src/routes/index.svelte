<script lang="ts">
	import { goto } from '$app/navigation';
	import { user as userStore } from '$lib/stores/user';
	import { auth, db } from '$lib/firebase';
	import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
	import { doc, getDoc, setDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';

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

	onMount(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				userStore.set({
					id: user.uid,
					name: user.displayName ?? ''
				});
				console.log('login');
				goto('/qr');
			} else {
				userStore.set(undefined);
				// User is signed out
				console.log('logout');
			}
		});
	});
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
