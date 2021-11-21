<script lang="ts">
	import { Column } from 'carbon-components-svelte';

	export let name: string;
	export let show: boolean;
</script>

	{#if show}
		<Column sm={2} md={4} lg={8} class="auma" noGutter>
			<img src={name + '.jpg'} alt="name" width="80%" />
			<div><h4>{name}</h4></div>
		</Column>
	{:else}
		<Column sm={2} md={4} lg={8} class="auma" noGutter>
			<img src="non.jpg" alt="noimage" width="80%" />
			<div class="margin-small center margin-middle">未発見</div>
		</Column>
	{/if}
