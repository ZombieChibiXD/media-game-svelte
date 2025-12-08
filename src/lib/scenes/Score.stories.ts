import type { Meta, StoryObj, Preview } from '@storybook/svelte';
import Score from './Score.svelte';
import { fn } from 'storybook/test';

const meta: Meta<typeof Score> = {
  title: 'Scenes/Score',
  component: Score,
  args: {
  },
};

export default meta;

type Story = StoryObj<typeof Score>;

export const Default: Story = {
  args: {
    // You can set props here, e.g. onclick: fn(),
  },
};
