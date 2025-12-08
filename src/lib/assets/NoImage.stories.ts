import { defineMeta } from '@storybook/addon-svelte-csf';
import type { Meta, StoryObj } from '@storybook/svelte';
import { ComponentNames } from './animals';
import NoImage from './NoImage.svelte';

const meta: Meta<NoImage> = {
	title: 'Assets/NoImage',
	component: NoImage,
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof NoImage>;

export const Default: Story = {
	args: {}
};