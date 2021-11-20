<script>
	import { authStore } from '$lib/authStore';
	import { db } from '$lib/firebase';
	import { doc, updateDoc } from 'firebase/firestore';
	import { onMount } from 'svelte';

	async function updatedb() {
		try {
			const washingtonRef = doc(db, 'fossil', $authStore.userid);

			// Set the "capital" field of the city 'DC'

			await updateDoc(washingtonRef, { ankylo: true });
		} catch (e) {
			console.log(e);
		}
	}
	onMount(() => {
		updatedb();
	});
</script>

<!-- svelte-ignore missing-declaration -->
<h1>アンキロサウルス発見！</h1>
