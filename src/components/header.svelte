<script lang="ts">
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/authStore';
	import { getAuth, signOut } from 'firebase/auth';
	import { onDestroy } from 'svelte';

	const sub = authStore.subscribe(async (u) => {
		if (!u.isLoggedIn) {
			await goto('/login');
		}
	});

	async function logoutWithGoogle() {
		try {
			const auth = getAuth();
			await signOut(auth);
			$authStore.isLoggedIn = false;
		} catch (e) {
			console.log(e);
		} finally {
		}
	}

	onDestroy(() => {
		sub();
	});
</script>

<slot>
	<h2>{$authStore.username}</h2>
	<h2>{$authStore.isLoggedIn}</h2>

	<button on:click={logoutWithGoogle}>ログアウト</button>
</slot>
