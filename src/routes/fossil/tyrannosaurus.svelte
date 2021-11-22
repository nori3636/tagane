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
				tyranno: true
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
	<h1 class="margin-left">ティラノサウルス</h1>
	<div class="center">
		<img src="/tyranno.jpg" alt="main" width="72%" />
	</div>
	<div class="border margin-side-big">
		<p>
			<strong>
				ティラノサウルス（学名：genus Tyrannosaurus）は、約6,800万 -
				約6,600万年前（中生代白亜紀末期マーストリヒチアン）の北アメリカ大陸に生息していた肉食恐竜。
				大型獣脚類の1属である。
				最大全長は約13メートル、最大体重は約9トンと、現在まで報告されている獣脚類の中で史上最大級の体格を誇る種の一つに数えられており、中生代最後の地質区分とされるマーストリヒチアン最末期の約200万年間にかけて北米ララミディア大陸に生息していた。
				出典：wikipedia
			</strong>
		</p>
	</div>
</div>
