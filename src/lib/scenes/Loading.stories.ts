import type { Meta, StoryObj, Preview } from '@storybook/svelte';
import Loading from './Loading.svelte';
import { fn } from 'storybook/test';

const meta: Meta<typeof Loading> = {
  title: 'Scenes/Loading',
  component: Loading,
  args: {
    // onclick: fn(),
    animate: false // Default to animate
  },
  play: async ({ canvasElement }) => {
    const canvas = canvasElement as HTMLElement;
    // On click alert
    canvas.addEventListener('click', () => {
    });
  }
};

export default meta;

type Story = StoryObj<typeof Loading>;

export const Default: Story = {
  args: {
    // You can set props here, e.g. onclick: fn(),
  },
};
