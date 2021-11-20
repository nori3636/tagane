<script>
	import { onMount } from 'svelte';
	import { db } from '../lib/firebase';
	import Fossil from '../components/fossil.svelte';
	import { doc, getDoc } from 'firebase/firestore';
	import { authStore } from '$lib/authStore';

	const json = { test: true, spino: false, ankylo: false };

	async function getdb() {
		try {
			const Ref = doc(db, 'fossil', $authStore.userid);
			const docSnap = await getDoc(Ref);
			if (docSnap.exists()) {
				const data = docSnap.data();
				console.log('Document data:', docSnap.data());
			} else {
				// doc.data() will be undefined in this case
				console.log('No such document!');
			}
		} catch (e) {
			console.log(e);
		}
	}

	onMount(() => {
		getdb();
	});
</script>

<h1>図鑑ページです</h1>
{#each Object.entries(json) as [key, value]}
	<Fossil name={key} show={value} />
{/each}
