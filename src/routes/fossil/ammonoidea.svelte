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
				ammo: true
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
	<h1 class="margin-left">アンモナイト</h1>
	<div class="center">
		<img src="/ammo.jpg" alt="main" width="72%" />
	</div>
	<div class="border margin-side-big">
		<p>
			<strong>アンモナイト（分類名：アンモナイト亜綱、学名：subclassisAmmonoidea)</strong><br />
			古生代シルル紀末期から中生代白亜紀末までのおよそ3億5000万年前後の間を、海洋に広く分布し繁栄した、頭足類の分類群の一つ。
			多くの種が平らな巻き貝のような形をした殻を持っているのが特徴である。 アンモナイト亜綱は、オルドビス紀から生息するオウムガイ亜綱（英語版）の中から分化したものと考えられている。
			以来、彼らは実に長くの時代を繁栄していたが、中生代の幕引きとなる白亜紀末のK-Pg境界を最後に地球上から姿を消した。
			古生代と中生代の下位に当たる各年代を生きた種はそれぞれに示準化石とされており、地質学研究にとって極めて重要な生物群となっている。
			出典：wikipedia
		</p>
	</div>
</div>
