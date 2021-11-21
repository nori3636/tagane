<script>
	import { authStore } from '$lib/authStore';
	import { Row } from 'carbon-components-svelte';
	import { doc, getDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';
	import { db } from '../firebase';
	import Fossil from './fossil.svelte';

	let dataFetchingPromise;

	async function getdb() {
		const Ref = doc(db, 'fossil', $authStore.userid);
		const docSnap = await getDoc(Ref);
		if (docSnap.exists()) {
			console.log('Document data:', docSnap.data());
			console.log(docSnap.data());
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

{#await dataFetchingPromise}
	loading...
{:then dataFetchingPromise}
	<div class="margin-small">
		<Row class="center auma">
			{#each Object.entries(dataFetchingPromise ?? {}) as [key, value]}
				<Fossil name={key} show={value} />
			{/each}
		</Row>
	</div>
{:catch}
	error!
{/await}
