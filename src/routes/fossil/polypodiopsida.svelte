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
				poly: true
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
	<h1 class="margin-left">シダ種子類</h1>
	<div class="center">
		<img src="/poly.jpg" alt="main" width="72%" />
	</div>
	<div class="border margin-side-big">
		<p>
			<strong>
				シダ種子類（シダしゅしるい）とは化石植物で、原始的な裸子植物の一群である。
				約2億5千万年前のデボン紀後期から栄え、白亜紀に絶滅した。
				典型的なものでは現生のシダに似た葉（栄養葉と胞子葉が分化していない）に種子がついているが、その他に形態的には異なるが関連すると考えられる多数の種類を含む。
				出典：wikipedia
			</strong>
		</p>
	</div>
</div>
