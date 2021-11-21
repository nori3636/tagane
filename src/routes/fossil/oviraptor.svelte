<script>
	import { user } from '$lib/stores/user';
	import { checkio, db } from '$lib/firebase';
	import { doc, updateDoc } from 'firebase/firestore';
	import Header from '$lib/components/header.svelte';
	import { onMount } from 'svelte';

	async function updatedb() {
		try {
			if ($user === undefined) return;
			const Ref = doc(db, 'fossil', $user.id);

			await updateDoc(Ref, {
				ovi: true
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

<div>
	<h1 class="margin-left">オヴィラプトルの卵</h1>
	<div class="center">
		<img src="/ovi.jpg" alt="main" width="72%" />
	</div>
	<div class="border margin-side-big">
		<p>
			<strong>
				オヴィラプトル（学名:Oviraptor、「卵泥棒」の意)
				ロイ・チャップマン・アンドリュース率いる遠征でジョージ・オルセンが発見し、ヘンリー・オズボーンが1924年に最初に記載した、モンゴルの小型獣脚類の恐竜の属。
				学名はラテン語で「卵泥棒」「卵を没収する者」を意味し、これはプロトケラトプスのものと考えられていた大量の卵の上に最初の化石標本が発見されたことを反映している。
				1924年の彼の論文でオズボーンは、オヴィラプトルの頭骨が卵からわずか4センチメートルしか離れていないという、巣に極めて近い位置から発見されたことを命名の理由とした。
				しかし、オズボーンはオヴィラプトルという名前はその摂食行動についてミスリードを誘い、特性を偽って示しているかもしれないとも提案した。
				1990年代に、巣を作るシチパチのようなオヴィラプトル科が発見され、名前に関するオズボーンの注意が正しかったことが証明された。
				これらの発見から、卵はおそらくオヴィラプトルそのものの卵であり、標本の個体は実際には卵を孵化させようとしていて巣で死亡したのだった。
				出典：wikipedia
			</strong>
		</p>
	</div>
</div>
