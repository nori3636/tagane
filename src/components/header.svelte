<script lang="ts">
	import { authStore } from '$lib/authStore';
	import { getAuth, signOut } from 'firebase/auth';
	import { Row, Column, Button } from 'carbon-components-svelte';
	import { goto } from '$app/navigation';
	async function logoutWithGoogle() {
		try {
			const auth = getAuth();
			await signOut(auth);
			await goto('/');
		} catch (e) {
			console.log(e);
		}
	}
</script>

<slot>
	<Row>
		<Column><h4 class="margin-small">{$authStore.username + ' さん'}</h4></Column>
		<Column><div class="right"><Button on:click={logoutWithGoogle}>ログアウト</Button></div></Column
		>
	</Row>
</slot>
