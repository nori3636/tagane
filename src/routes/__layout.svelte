<script>
	import { initializeApp } from 'firebase/app';
	import { onMount } from 'svelte';
	import { getAuth, onAuthStateChanged } from 'firebase/auth';
	import { isLogeedIn, userid } from '$lib/authStore';
	import firebaseConfig from '../lib/env';

	onMount(() => {
		// For Firebase JS SDK v7.20.0 and later, measurementId is optional
		const app = initializeApp(firebaseConfig);
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in, see docs for a list of available properties
				// https://firebase.google.com/docs/reference/js/firebase.User
				$userid = user.uid;
				// ...
			} else {
				// User is signed out
				// ...
			}
		});
	});
</script>

<slot />
