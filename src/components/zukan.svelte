<script>
	import { onMount } from 'svelte';
	import { db } from '../lib/firebase';
	import Fossil from '../components/fossil.svelte';
	import { doc, getDoc } from 'firebase/firestore';
	import { authStore } from '$lib/authStore';

	let testjson;

	let dataFetchingPromise;

	async function getdb() {
		const Ref = doc(db, 'fossil', $authStore.userid);
		const docSnap = await getDoc(Ref);
		if (docSnap.exists()) {
			console.log('Document data:', docSnap.data());
			console.log(docSnap.data());
			testjson = docSnap.data();
			return docSnap.data();
		} else {
			// doc.data() will be undefined in this case
			console.log('No such document!');
			return undefined;
		}
	}

	onMount(() => {
		dataFetchingPromise = getdb();
	});
</script>

<slot>
	{#await dataFetchingPromise}
		loading...
	{:then dataFetchingPromise}
		{#each Object.entries(dataFetchingPromise ?? {}) as [key, value]}
			<Fossil name={key} show={value} />
		{/each}
	{:catch err}
		error!
	{/await}
</slot>
