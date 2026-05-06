import { defineMeta } from '@storybook/addon-svelte-csf';
import Control from './Control.svelte';
import { ComponentNames } from './controls';

const meta = defineMeta({
	title: 'Assets/Control',
	component: Control,
	argTypes: {
		type: {
			control: 'select',
			options: ComponentNames
		}
	}
});

export default meta;

export const Default = {
	args: {
		type: undefined
	}
};

export const Play = {
	args: {
		type: 'Play'
	}
};
