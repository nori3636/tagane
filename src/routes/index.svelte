<script lang="ts">
	import { goto } from '$app/navigation';
	import { authStore } from '$lib/authStore';
	import { Button } from 'carbon-components-svelte';
	import { ImageLoader } from 'carbon-components-svelte';
	import { Grid, Row, Column } from 'carbon-components-svelte';
	function login() {
		try {
			authStore.subscribe(async (u) => {
				if (u.isLoggedIn) {
					await goto('/qr');
				} else {
					await goto('/login');
				}
			});
		} catch (e) {
			console.log(e);
		}
	}
</script>

<div>
	<h1 class="center margin-big">Welcome to Tagane</h1>
	<ImageLoader src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" />
	<div class="center margin-big">
		<Button on:click={login}>ログインして始める！！</Button>
	</div>
</div>
