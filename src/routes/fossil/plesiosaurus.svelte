<script>
	import { authStore } from '$lib/authStore';
	import { checkio, db } from '$lib/firebase';
	import { doc, updateDoc } from 'firebase/firestore';
	import Header from '$lib/components/header.svelte';
	import { onMount } from 'svelte';

	async function updatedb() {
		try {
			const Ref = doc(db, 'fossil', $authStore.userid);

			// Set the "capital" field of the city 'DC'

			await updateDoc(Ref, {
				ples: true
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
<Header back={true} />
<h1>プレシオサウルス</h1>
<img src="/ples.jpg" alt="main" width="80%" />
<p>
	プレシオサウルス（Plesiosaurus）は中生代ジュラ紀前期に棲息していた首長竜の属の一つである。首長竜目
	- プレシオサウルス科に属する。
	発見当初は水棲の生き物であることから「魚類と爬虫類の中間的生物、その中でも爬虫類により近い」と推測され、そこからplesiosaurus=「爬虫類に近似した」を意味する属名がつけられた。
	出典：wikipedia
</p>
