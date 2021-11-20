<script>
	import { authStore } from '$lib/authStore';
	import { checkio, db } from '$lib/firebase';
	import { Button } from 'carbon-components-svelte';
	import { doc, updateDoc } from 'firebase/firestore';
	import Header from '$lib/components/header.svelte';
	import { onMount } from 'svelte';

	async function updatedb() {
		try {
			const Ref = doc(db, 'fossil', $authStore.userid);

			// Set the "capital" field of the city 'DC'

			await updateDoc(Ref, {
				ankylo: true
			});
			console.log('update');
		} catch (e) {
			console.log(e);
		}
	}
	onMount(() => {
		checkio();
		updatedb();
	});
</script>

<!-- svelte-ignore missing-declaration -->
<Header />
<h1>アンキロサウルス発見！</h1>
