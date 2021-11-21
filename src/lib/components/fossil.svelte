<script lang="ts">
	import { Column, Row } from 'carbon-components-svelte';

	export let name: string;
	export let show: boolean;
</script>

<slot>
	{#if show}
		<img src={name + '.jpeg'} alt="name" />
		<div>説明文</div>
	{:else}
		<Column>
			<div class="margin-small center" />
		</Column>
	{/if}
</slot>
