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
			<Column class="left">
				<Button kind="secondary" on:click={backqr}><p>←戻る</p></Button>
			</Column>
		{/if}
		<Column>
			<div class="center">
				<ImageLoader src="\tagane_black.png" />
			</div>
			<h4 class="margin-small"><p>{$authStore.username + ' さん'}</p></h4></Column
		>
		<Column class="right">
			<Button kind="secondary" on:click={logoutWithGoogle}><p>ログアウト</p></Button>
		</Column>
	</Row>
</slot>

<style>
	p {
		font-size: 50%;
		text-align: center;
	}
</style>
