<script lang="ts">
	export let name: string;
	export let show: boolean;
</script>

<slot>
	{#if show}
		<img src={name + '.jpeg'} alt="name" />
		<div>説明文</div>
	{:else}
		<div>見つけてないよ</div>
	{/if}
</slot>
