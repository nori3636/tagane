<script lang="ts">
	import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
	async function loginWithGoogle() {
		try {
			const auth = getAuth();
			const provider = new GoogleAuthProvider();
			await signInWithPopup(auth, provider);
		} catch (e) {
			console.log(e);
		}
	}
</script>

<h1>Login with Google</h1>

<img on:click={loginWithGoogle} src="/login-with-google.png" alt="Login With Google" />

<style>
</style>
