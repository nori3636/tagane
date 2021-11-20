<script lang="ts">
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/authStore';
	import { Button } from 'carbon-components-svelte';
	function login() {
		try {
			authStore.subscribe(async (u) => {
				if (u.isLoggedIn) {
					await goto('/qr');
				} else {
					await goto('/login');
				}
			});
		} catch (e) {
			console.log(e);
		}
	}
</script>

<h1>Welcome to Main</h1>
<Button on:click={login}>ログイン</Button>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
