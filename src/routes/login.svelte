<script lang="ts">
	import { auth, provider } from '$lib/firebase';
	import { signInWithPopup } from 'firebase/auth';
	import { authStore } from '$lib/authStore';
	import { goto } from '$app/navigation';

	async function loginWithGoogle() {
		try {
			await signInWithPopup(auth, provider);
		} catch (e) {
			console.log(e);
		} finally {
			authStore.subscribe(async (u) => {
				if (u.isLoggedIn) {
					await goto('/qr');
				}
			});
		}
	}
</script>

<h1>Login with Google</h1>

<img on:click={loginWithGoogle} src="/login-with-google.png" alt="Login With Google" />
