<script lang="ts">
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/authStore';
	import { db } from '$lib/firebase';
	import { Button, Modal } from 'carbon-components-svelte';
	import { ImageLoader } from 'carbon-components-svelte';

	import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { collection, doc, getDoc, setDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	async function exitdb() {
		try {
			const Ref = doc(db, 'fossil', $authStore.userid);
			const docSnap = await getDoc(Ref);
			return docSnap.exists();
		} catch (e) {
			console.log(e);
		}
	}

	async function add() {
		const Ref = collection(db, 'fossil');
		await setDoc(doc(Ref, $authStore.userid), {
			ankylo: false,
			stego: false,
			spino: false,
			brachio: false,
			tyranno: false,
			plesio: false
		});
	}
	async function loginWithGoogle() {
		try {
			const auth = getAuth();
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider);
			if (exitdb()) {
				add();
			} else {
				console.log('exit db!');
			}
			await goto('/qr');
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
		if ($authStore.isLoggedIn) {
			goto('/qr');
		}
	});
</script>

<div class="top center high">
	<div width="50%" class="center top">
		<img src="\tagane_black.png" width="50%" />
		<img
			on:click={loginWithGoogle}
			src="/login-with-google.png"
			alt="Login With Google"
			width="50%"
		/>
	</div>
</div>
