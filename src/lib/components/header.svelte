<script lang="ts">
	import { authStore } from '$lib/authStore';
	import { getAuth, signOut } from 'firebase/auth';
	import { Row, Column, Button, ImageLoader } from 'carbon-components-svelte';
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
	function backqr() {
		goto('/qr');
	}
</script>

<slot>
	<Row>
		<Column><div class="left"><Button on:click={backqr}>←戻る</Button></div></Column>
		<Column><div class="center"><ImageLoader src="\tagane_black.png" /></div></Column>
		<Column><div class="right"><Button on:click={logoutWithGoogle}>ログアウト</Button></div></Column
		>
	</Row>
	<Column><h4 class="margin-small">{$authStore.username + ' さん'}</h4></Column>
</slot>
