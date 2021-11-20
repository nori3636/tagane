<script lang="ts">
	import { authStore } from '$lib/authStore';
	import { getAuth, signOut } from 'firebase/auth';
	import { Row, Column, Button } from 'carbon-components-svelte';
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
	<Row>
		<Column><h2>{$authStore.username}</h2></Column>
		<Column><Button on:click={logoutWithGoogle}>ログアウト</Button></Column>
	</Row>
</slot>
