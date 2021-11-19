<script>
	import { initializeApp } from 'firebase/app';
	import { onDestroy, onMount } from 'svelte';
	import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
	import { authStore } from '$lib/authStore';
	import firebaseConfig from '../lib/env';
	import { goto } from '$app/navigation';

	onMount(() => {
		// For Firebase JS SDK v7.20.0 and later, measurementId is optional
		const app = initializeApp(firebaseConfig);
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				$authStore.userid = user.uid;
				$authStore.username = user.displayName;
				// ...
			} else {
				// User is signed out
				// ...
			}
		});
	});
</script>

<slot />
