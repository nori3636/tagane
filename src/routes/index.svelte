<script lang="ts">
	import { getAuth, signOut } from 'firebase/auth';
	import { authStore } from '$lib/authStore';
	import { goto } from '$app/navigation';
	import { onDestroy } from 'svelte';
	async function logoutWithGoogle() {
		try {
			const auth = getAuth();
			await signOut(auth);
		} catch (e) {
			console.log(e);
		}
	}
	const sub = authStore.subscribe(async (u) => {
		if (!u.isLoggedIn) {
			await goto('/login');
		}
	});

	onDestroy(() => {
		sub();
	});
</script>

<h1>Welcome to SvelteKit</h1>
<h2>{$authStore.userid}</h2>
<h2>{$authStore.isLoggedIn}</h2>

<button on:click={logoutWithGoogle}>ログアウト</button>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
