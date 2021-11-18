<script lang="ts">
	import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	import { authStore } from '$lib/authStore';
	import { goto } from '$app/navigation';
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
			await goto('/');
		}
	});

	onDestroy(() => {
		sub();
	});
</script>

<h1>Login with Google</h1>

<img on:click={loginWithGoogle} src="/login-with-google.png" alt="Login With Google" />

<style>
</style>
