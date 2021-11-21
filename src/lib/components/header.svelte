<script lang="ts">
	import { authStore } from '$lib/authStore';
	import { getAuth, signOut } from 'firebase/auth';
	import { Row, Column, Button, ImageLoader } from 'carbon-components-svelte';
	import { goto } from '$app/navigation';
	import { auth, checkio } from '$lib/firebase';

	export let back: boolean;
	let dataFetchingPromise;
	async function logoutWithGoogle() {
		try {
			const auth = getAuth();
			await signOut(auth)
				.then(() => {
					console.log('goto前');
					goto('/');
				})
				.catch((e) => {
					console.log(e);
				});
		} catch (e) {
			console.log(e);
		}
	}
	async function backqr() {
		await goto('/qr');
	}
</script>

<slot>
	<Row>
		{#if back}
			<Column
				><div class="left"><Button kind="secondary" on:click={backqr}>←戻る</Button></div></Column
			>
		{:else}
			<Column><div class="left margin-around" /></Column>
		{/if}
		<Column><div class="center"><ImageLoader src="\tagane_black.png" /></div></Column>
		<Column
			><div class="right">
				<Button kind="secondary" on:click={logoutWithGoogle}>ログアウト</Button>
			</div></Column
		>
	</Row>
</slot>

<style>
</style>
