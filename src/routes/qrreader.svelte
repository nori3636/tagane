<script lang="ts">
	import { getAuth, signOut } from 'firebase/auth';
	import { authStore } from '$lib/authStore';
	import { goto } from '$app/navigation';
	import { onDestroy } from 'svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<h2>{$authStore.userid}</h2>
<h2>{$authStore.username}</h2>
<h2>{$authStore.isLoggedIn}</h2>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
