import type { Meta, StoryObj, Preview } from '@storybook/svelte';
import LevelSelect from './LevelSelect.svelte';
import { fn } from 'storybook/test';

const meta: Meta<typeof LevelSelect> = {
  title: 'Scenes/LevelSelect',
  component: LevelSelect,
  args: {
  },
};

export default meta;

type Story = StoryObj<typeof LevelSelect>;

export const Default: Story = {
  args: {
    // You can set props here, e.g. onclick: fn(),
  },
};
