<script lang="ts">
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/authStore';
	import { auth,db } from '$lib/firebase';
	import { getAuth,GoogleAuthProvider,onAuthStateChanged,signInWithPopup } from 'firebase/auth';
	import { collection,doc,getDoc,setDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	async function exitdb() {
		try {
			const Ref = doc(db, 'fossil', $authStore.userid);
			const docSnap = await getDoc(Ref);
			return docSnap.exists();
		} catch (e) {
			console.log(e);
			return false;
		}
	}

	async function add() {
		const Ref = collection(db, 'fossil');
		await setDoc(doc(Ref, $authStore.userid), {
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

	// const sub = authStore.subscribe(async (u) => {
	// 	if (u.isLoggedIn) {
	// 		await goto('/qr');
	// 	}
	// });

	// onDestroy(() => {
	// 	sub();
	// });
	onMount(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				authStore.set({
					isLoggedIn: true,
					username: user.displayName,
					userid: user.uid
				});
				console.log('login');
				goto('/qr');
				// ...
			} else {
				authStore.set({
					isLoggedIn: false
				});
				// User is signed out
				// ...
				console.log('logout');
			}
		});

		// if ($authStore.isLoggedIn) {
		// 	console.log('まだログインしてる');

		// }
	});
</script>

<div class="top center high">
	<div width="50%" class="center top">
		<img src="\tagane_black.png" alt="logo" width="50%" />
		<img
			on:click={loginWithGoogle}
			src="/login-with-google.png"
			alt="Login With Google"
			width="50%"
		/>
	</div>
</div>
