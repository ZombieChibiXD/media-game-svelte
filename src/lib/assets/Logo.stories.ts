import { defineMeta } from '@storybook/addon-svelte-csf';
import Logo from './Logo.svelte';
import type { Meta, StoryObj } from '@storybook/svelte';

const meta: Meta<Logo> = {
	title: 'Assets/Logo',
	component: Logo,
	argTypes: {}
};

export default meta;
type Story = StoryObj<typeof Logo>;

export const Default: Story = {
	args: {}
};
