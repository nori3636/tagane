<script lang="ts">
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/authStore';
	import { Button, Modal } from 'carbon-components-svelte';
	import { ImageLoader } from 'carbon-components-svelte';

	import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { onDestroy } from 'svelte';

	async function loginWithGoogle() {
		try {
			const auth = getAuth();
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider);
		} catch (e) {
			console.log(e);
		}
	}

	const sub = authStore.subscribe(async (u) => {
		if (u.isLoggedIn) {
			await goto('/qr');
		}
	});

	onDestroy(() => {
		sub();
	});
</script>

<div>
	<h1 class="center margin-big">Welcome to Tagane</h1>
	<ImageLoader src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" />
	<div class="center margin-big">
		<img on:click={loginWithGoogle} src="/login-with-google.png" alt="Login With Google" />
	</div>
</div>
