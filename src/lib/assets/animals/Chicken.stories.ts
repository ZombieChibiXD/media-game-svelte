import { defineMeta } from '@storybook/addon-svelte-csf';
import type { Meta, StoryObj } from '@storybook/svelte';
import type Animal from '../Animal.svelte';
import ParentMeta from '../Animal.stories'

const meta = {
	...ParentMeta,
	title: 'Assets/Animal/Chicken',

} satisfies Meta<typeof Animal>

export default meta;

type AnimalStory = StoryObj<typeof meta>;

export const Default: AnimalStory = {
	args: {
        type: 'Chicken',
    }
};

export const Walk: AnimalStory = {
    args: {
        width: "200px",
        type: "Chicken",
        animate: "walk"
    }
};
