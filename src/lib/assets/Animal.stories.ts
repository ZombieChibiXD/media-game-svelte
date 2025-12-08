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
			type: 'function',
		}
	},
	args: {
		width: '200px',
	},
	play: async ({ component, canvas, userEvent })=>{
		console.log('hello')
		console.log(component)
	}
} satisfies Meta<typeof Animal>

export default meta;

type Story = StoryObj<typeof Animal>;

export const Default: Story = {
	args: {
		type: undefined
	}
};

export const Dog: Story = {
	args: {
		type: 'Dog'
	}
};

export const Cat: Story = {
	args: {
		type: 'Cat'
	}
};

export const Mouse: Story = {
	args: {
		type: 'Mouse'
	}
};

export const Crocodile: Story = {
	args: {
		type: 'Crocodile'
	}
};
