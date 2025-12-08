import { defineMeta } from '@storybook/addon-svelte-csf';
import Control from './Control.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';
import { ComponentNames } from './controls';

const meta: Meta<Control> = {
	title: 'Assets/Control',
	component: Control,
	argTypes: {
		type: {
			control: 'select',
			options: ComponentNames
		}
	}
};

export default meta;
type Story = StoryObj<typeof Control>;

export const Default: Story = {
	args: {
		type: undefined
	}
};

export const Play: Story = {
	args: {
		type: 'Play'
	}
};