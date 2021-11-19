<script lang="ts">
	import { getAuth, signOut } from 'firebase/auth';
	import { authStore } from '$lib/authStore';
	import { goto } from '$app/navigation';
	import { onDestroy } from 'svelte';
	import Header from '../components/header.svelte';
</script>

<Header />
<h1>QR</h1>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
