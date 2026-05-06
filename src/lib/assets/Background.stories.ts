import { defineMeta } from '@storybook/addon-svelte-csf';
import Background from './Background.svelte';
import { ComponentNames } from './backgrounds';

const meta = defineMeta({
	title: 'Assets/Background',
	component: Background,
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

export const Loading = {
	args: {
		type: 'Loading'
	}
};
