<!-- <script lang="ts">
	import { collection, addDoc, getDocs } from 'firebase/firestore';
	import { getFirestore } from 'firebase/firestore';
	import { onMount } from 'svelte';
	const db = getFirestore();
	async function adddb() {
		try {
			const docRef = await addDoc(collection(db, 'users'), {
				flag1: true,
				last: 'Lovelace',
				born: 1815
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	}
	async function resetdb() {
		try {
			const docRef = await addDoc(collection(db, 'users'), {
				flag1: false,
				flag2: false,
				flag3: false
			});
			console.log('Document written with ID: ', docRef.id);
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	}
	// async function vewdb() {
	// 	const querySnapshot = await getDocs(collection(db, 'users'));
	// 	querySnapshot.forEach((doc) => {
	// 		console.log(`${doc.id} => ${doc.data()}`);
	// 	});
	// }
	onMount(() => {
		adddb();
		// vewdb();
	});
</script> -->

<h1>テスト</h1>
<!-- <button on:click={resetdb} /> -->
