import { animalListing } from "$lib/animalData";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
    return {
        selectedAnimalComponent: animalListing[Math.floor(Math.random() * animalListing.length)]
    }
};