import { defineMeta } from '@storybook/addon-svelte-csf';
import Background from './Background.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';
import { ComponentNames } from './animals';

const meta: Meta<Background> = {
	title: 'Assets/Background',
	component: Background,
	argTypes: {
		type: {
			control: 'select',
			options: ComponentNames
		},
	}
};

export default meta;
type Story = StoryObj<typeof Background>;

export const Default: Story = {
	args: {
		type: undefined
	}
};

export const Loading: Story = {
	args: {
		type: 'Loading'
	}
};