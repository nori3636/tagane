<script lang="ts">
	import { Column, ImageLoader, Row } from 'carbon-components-svelte';

	export let name: string;
	export let show: boolean;
</script>

<slot>
	{#if show}
		<img src={name + '.jpeg'} alt="name" />
		<div>説明文</div>
	{:else}
		<Column sm={2} md={4} lg={8} class="auma" noGutter>
			<img src="non.jpg" width="80%" />
			<div class="margin-small center margin-middle">未発見</div>
		</Column>
	{/if}
</slot>
