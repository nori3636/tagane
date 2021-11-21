<script>
	import { onMount } from 'svelte';
	import '../app.css';
	// For Firebase JS SDK v7.20.0 and later, measurementId is optional

	onMount(() => {
		// onAuthStateChanged(auth, (user) => {
		// 	if (user) {
		// 		// User is signed in, see docs for a list of available properties
		// 		// https://firebase.google.com/docs/reference/js/firebase.User
		// 		authStore.set({
		// 			isLoggedIn: true,
		// 			username: user.displayName,
		// 			userid: user.uid
		// 		});
		// 		// ...
		// 	} else {
		// 		authStore.set({
		// 			isLoggedIn: false
		// 		});
		// 		// User is signed out
		// 		// ...
		// 	}
		// });
		// if (!$authStore.isLoggedIn) {
		// 	goto('/');
		// }
	});
</script>

<slot />
