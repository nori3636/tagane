<script lang="ts">
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/authStore';

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
<button on:click={login}>ログイン</button>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
