<script lang="ts">
	import { goto } from '$app/navigation';
	import { auth } from '$lib/firebase';
	import { user } from '$lib/stores/user';
	import { Button, Column, ImageLoader, Row } from 'carbon-components-svelte';
	import { signOut } from 'firebase/auth';

	export let back: boolean;
	async function logoutWithGoogle() {
		return signOut(auth)
			.then(() => {
				console.log('goto前');
				return goto('/');
			})
			.catch((e) => {
				console.log(e);
			});
	}
	async function backqr() {
		await goto('/qr');
	}
</script>

<Row>
	<Column>
		<div class="left">
			{#if back}
				<Button kind="secondary" on:click={backqr}>←戻る</Button>
			{/if}
		</div>
	</Column>
	<Column><div class="center"><ImageLoader src="/tagane_black.png" /></div></Column>
	<Column>
		{#if $user !== undefined}
			<div class="right">
				<Button kind="secondary" on:click={logoutWithGoogle}>ログアウト</Button>
			</div>
		{/if}
	</Column>
</Row>
