import type { Meta, StoryObj, Preview } from '@storybook/svelte';
import MainMenu from './MainMenu.svelte';
import { fn } from 'storybook/test';

const meta: Meta<typeof MainMenu> = {
  title: 'Scenes/MainMenu',
  component: MainMenu,
  args: {
  },
};

export default meta;

type Story = StoryObj<typeof MainMenu>;

export const Default: Story = {
  args: {
    // You can set props here, e.g. onclick: fn(),
  },
};
