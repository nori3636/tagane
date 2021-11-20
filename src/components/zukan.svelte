<script>
	import { onMount } from 'svelte';
	import { db } from '../lib/firebase';
	import Fossil from '../components/fossil.svelte';
	import { doc, getDoc } from 'firebase/firestore';
	import { authStore } from '$lib/authStore';

	const testjson = { test: true, spino: false, ankylo: false };

	let dataFetchingPromise;

	async function getdb() {
		const Ref = doc(db, 'fossil', $authStore.userid);
		const docSnap = await getDoc(Ref);
		if (docSnap.exists()) {
			console.log('Document data:', docSnap.data());
			return testjson;
		} else {
			// doc.data() will be undefined in this case
			console.log('No such document!');
			return testjson;
		}
	}

	onMount(() => {
		dataFetchingPromise = getdb();
		console.log(dataFetchingPromise);
	});
</script>

<slot>
	{#await}
		loading...
	{:then}
		{#each Object.entries(dataFetchingPromise) as [key, value]}
			<Fossil name={key} show={value} />
		{/each}
	{:catch err}
		error!
	{/await}
</slot>
