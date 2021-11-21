<script lang="ts">
	import { user } from '$lib/stores/user';
	import { db } from '$lib/firebase';
	import { Button } from 'carbon-components-svelte';
	import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';

	async function add() {
		if ($user === undefined) return;
		const Ref = doc(db, 'fossil', $user.id);
		await setDoc(Ref, {
			ankylo: false,
			spino: false
		});
	}

	async function getdb() {
		try {
			if ($user === undefined) return;
			const Ref = doc(db, 'fossil', $user.id);
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
			if ($user === undefined) return;
			const washingtonRef = doc(db, 'fossil', $user.id);

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
