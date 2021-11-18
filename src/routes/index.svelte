<script lang="ts">
	import { getAuth, signOut } from 'firebase/auth';
	import { isLogeedIn, userid } from '$lib/authStore';
	async function logoutWithGoogle() {
		try {
			const auth = getAuth();
			await signOut(auth);
		} catch (e) {
			console.log(e);
		}
	}
</script>

<h1>Welcome to SvelteKit</h1>
<h2>{$userid}</h2>

<button on:click={logoutWithGoogle}>ログアウト</button>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
