<script>
	import { user } from '$lib/stores/user';
	import { db } from '$lib/firebase';
	import { doc, updateDoc } from 'firebase/firestore';
	import Header from '$lib/components/header.svelte';
	import { onMount } from 'svelte';

	async function updatedb() {
		try {
			if ($user === undefined) return;
			const Ref = doc(db, 'fossil', $user.id);

			await updateDoc(Ref, {
				deino: true
			});
			console.log('update');
		} catch (e) {
			console.log(e);
		}
	}
	onMount(() => {
		updatedb();
	});
</script>

<!-- svelte-ignore missing-declaration -->
<Header back={true} />
<div>
	<h1 class="margin-left">ディニノニクス</h1>
	<div class="center">
		<img src="/deino.jpg" alt="main" width="72%" />
	</div>
	<div class="border margin-side-big">
		<p>
			<strong>
				デイノニクス (Deinonychus) は、白亜紀前期（アプチアン中期からアルビアン先期、約1億1,500万 -
				1億800万年前）の北アメリカに生息した竜盤目ドロマエオサウルス科の代表的な肉食恐竜。
				本種の命名に伴う論争が恐竜ルネサンスとして世界的な変革を促した。 出典：wikipedia
			</strong>
		</p>
	</div>
</div>
