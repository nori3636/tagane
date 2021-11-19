<script lang="ts">
	import { authStore } from '$lib/authStore';
	import { getAuth, signOut } from 'firebase/auth';

	async function logoutWithGoogle() {
		try {
			const auth = getAuth();
			await signOut(auth);
		} catch (e) {
			console.log(e);
		} finally {
		}
	}
</script>

<slot>
	<h2>{$authStore.username}</h2>
	<h2>{$authStore.isLoggedIn}</h2>

	<button on:click={logoutWithGoogle}>ログアウト</button>
</slot>
