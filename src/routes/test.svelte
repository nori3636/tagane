<script lang="ts">
	import { collection, updateDoc, doc, setDoc, getDoc } from 'firebase/firestore';
	import { db } from '$lib/firebase';
	import { Button } from 'carbon-components-svelte';
	import { authStore } from '$lib/authStore';

	async function add() {
		const Ref = collection(db, 'fossil');
		await setDoc(doc(Ref, $authStore.userid), {
			ankylo: false,
			spino: false
		});
	}

	async function getdb() {
		try {
			if ($authStore.userid === undefined) return;
			const Ref = doc(db, 'fossil', $authStore.userid);
			const docSnap = await getDoc(Ref);
			if (docSnap.exists()) {
				console.log('Document data:', docSnap.data());
			} else {
				// doc.data() will be undefined in this case
				console.log('No such document!');
			}
		} catch (e) {
			console.log(e);
		}
	}

	async function updatedb() {
		try {
			if ($authStore.userid === undefined) return;
			const washingtonRef = doc(db, 'fossil', $authStore.userid);

			await updateDoc(washingtonRef, {
				ankylo: true
			});
		} catch (e) {
			console.log(e);
		}
	}
</script>

<h1>テスト</h1>
<Button kind="secondary" on:click={getdb}>getdb</Button>
<Button kind="secondary" on:click={add}>adddb</Button>
<Button kind="secondary" on:click={updatedb}>updatedb</Button>
