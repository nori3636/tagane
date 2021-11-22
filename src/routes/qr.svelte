<script lang="ts">
	import Header from '$lib/components/header.svelte';
	import Zukan from '$lib/components/zukan.svelte';
	import Qrreader from '$lib/components/qrReader.svelte';
</script>

<Header back={false} />
<Qrreader />
<h4 class="margin-small">これまでに発見した化石</h4>

<Zukan />
