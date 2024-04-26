// place files you want to import through the `$lib` alias in this folder.
import type { Coffee } from "$lib/interfaces";


export const loadData = async (): Promise<Coffee[]> => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}