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
		<Column sm={1} md={2} lg={2} class="margin-small center" noGutter="true">
			<img src="non.jpg" width="100%" />
			<div class="margin-small center">未発見</div>
		</Column>
	{/if}
</slot>
