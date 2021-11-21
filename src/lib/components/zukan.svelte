<script>
	import { onMount } from 'svelte';
	import { db } from '../firebase';
	import Fossil from './fossil.svelte';
	import { doc, getDoc } from 'firebase/firestore';
	import { authStore } from '$lib/authStore';
	import { Column, Row } from 'carbon-components-svelte';

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
		<div class="margin-big">
			<Row class="center" noGutter="true">
				{#each Object.entries(dataFetchingPromise ?? {}) as [key, value]}
					<Fossil name={key} show={value} />
				{/each}
			</Row>
		</div>
	{:catch err}
		error!
	{/await}
</slot>
