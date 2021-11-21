<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Zukan from '$lib/components/zukan.svelte';
	import Qrreader from '$lib/components/qrReader.svelte';
	import { onMount } from 'svelte';
	import { checkio } from '$lib/firebase';
	onMount(() => {
		checkio();
	});
</script>

<Header back={false} />
<Qrreader />
<Zukan />
