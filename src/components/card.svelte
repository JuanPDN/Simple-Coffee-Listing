<script lang="ts">
	import { blur } from 'svelte/transition';

    let starFill = '/Star_fill.svg';
    let star = '/Star.svg';

	export let available: boolean;
	export let id: number;
	export let image: string;
	export let name: string;
	export let popular: boolean;
	export let price: string;
	export let rating: number;
	export let votes: number;
</script>

<div transition:blur id={id.toString()} class="card">
	<img src={image} alt={name} />
	<span class:popular>{popular ? 'Popular' : ''}</span>
	<div class="section1">
		<p class="name">{name}</p>
		<span>{price}</span>
	</div>
	<div class="section2">
		{#if rating > 0}
			<p class="rating">
				<img src={starFill} alt="star" />
				<strong>{rating}</strong>
				{votes > 0 ? `(${votes} votes)` : `No ratings`}
			</p>
		{:else}
			<p class="rating">
				<img src={star} alt="star" />
				{votes > 0 ? `(${votes} votes)` : `No ratings`}
			</p>
		{/if}

		<p class:available={!available}>{!available ? 'Sold out' : ''}</p>
	</div>
</div>

<style>
	.card {
		position: relative;
		color: #fef7ee;
		font-weight: 500;
		font-size: 0.875rem;
	}
	p {
		margin: 0px;
	}
	img {
		border-radius: 10px;
	}
	.popular {
		position: absolute;
		top: 0.5rem;
		left: 0.5rem;
		color: #1b1d1f;
		background-color: #f6c768;
		font-size: 0.625rem;
		font-weight: 600;
		padding: 0.3rem 0.8rem;
		border-radius: 15px;
	}
	.section1,
	.section2,
	p {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.section2 p {
		gap: 0.25rem;
	}
	.section1 span {
		font-size: 0.75rem;
		color: #1b1d1f;
		font-weight: 600;
		padding: 0.2rem;
		border-radius: 4px;
		background-color: #bee3cc;
	}
	.rating {
		color: #6f757c;
	}
	strong {
		color: #fef7ee;
	}
	.available {
		color: #ed735d;
	}
</style>
