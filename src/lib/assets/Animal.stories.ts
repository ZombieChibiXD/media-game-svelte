import { defineMeta } from '@storybook/addon-svelte-csf';
import Animal from './Animal.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';
import { ComponentNames } from './animals';
import type { AnimalProps } from './animals/type';

const meta = {
	title: 'Assets/Animal',
	component: Animal,
	argTypes: {

		type: {
			control: 'select',
			options: ComponentNames
		},
		animate: {
			control: 'select',
			options: [ null, 'walk']
		}
	},
	args: {
		width: '200px',
	},
} satisfies Meta<typeof Animal>

export default meta;

type AnimalStory = StoryObj<typeof meta>;

export const Default: AnimalStory = {
	args: {
		type: undefined
	}
};

export const Dog: AnimalStory = {
	args: {
		type: 'Dog'
	}
};