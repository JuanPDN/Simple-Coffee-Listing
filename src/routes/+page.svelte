<script lang="ts">
	import Card from '../components/card.svelte';

	import { loadData } from '$lib/index';
	import { onMount } from 'svelte';
	import type { Coffee } from '$lib/interfaces';

	let btn: string = 'btn1';
	let coffees: Coffee[] = [];

	onMount(async () => {
		coffees = await loadData();
	});

	const filters = async (name: string) => {
		if (name === 'btn1') {
			coffees = await loadData();
		} else {
			coffees = coffees.filter((e) => e.available !== false);
		}
		return (btn = name);
	};
</script>

<div class="bg"></div>
<div class="container">
	<div class="container-info">
		<h1>Our Collection</h1>
		<p>
			Introducing our Coffee Collection, a selection of unique coffees from different roast types
			and origins, expertly roasted in small batches and shipped fresh weekly.
		</p>
		<div>
			<button class:btnActive={btn === 'btn1'} on:click={() => filters('btn1')}>All Products</button
			>
			<button class:btnActive={btn === 'btn2'} on:click={() => filters('btn2')}
				>Available Now</button
			>
		</div>
	</div>
	<div class="cards-container">
		{#each coffees as coffee}
			<Card {...coffee} />
		{:else}
			<p>Loading ...</p>
		{/each}
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
	:global(body) {
		background: #111315;
		font-family: 'DM Sans', sans-serif;
		margin: 0;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	h1,
	p {
		margin: 0px;
	}
	h1 {
		text-align: center;
		font-size: 2rem;
		color: #fef7ee;
		font-weight: 600;
	}
	p {
		text-align: center;
		color: #6f757c;
		font-size: 1rem;
		font-weight: 500;
		margin: 8px 0px;
	}
	.container {
		background-color: #1b1d1f;
		background-image: url('../assets/vector.svg');
		background-repeat: no-repeat;
		background-position: calc(50% - -8rem) calc(1%);
		padding: 80px 40px;
		border-radius: 10px;
		margin: 10rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		z-index: 2;
	}
	.container-info {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 30rem;
	}
	.bg {
		background-image: url('../assets/bg-cafe.jpg');
		position: absolute;
		background-size: cover;
		min-height: 300px;
		width: 100%;
	}
	button {
		border: none;
		color: #fef7ee;
		padding: 8px 12px;
		background-color: transparent;
		font-size: 16px;
		font-weight: 500;
		margin: 12px 6px;
		border-radius: 5px;
		transition: all linear 0.2s;
	}
	.btnActive {
		background: #6f757c;
	}
	.cards-container {
		display: grid;
		grid-template-columns: 1fr;
		gap: 64px 32px;
		margin-top: 28px;
	}
	@media (min-width: 1024px) {
		.container {
			padding: 80px;
		}
		.cards-container {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media (min-width: 1080px) {
		.container {
			padding: 80px 124px;
		}
		.cards-container {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
