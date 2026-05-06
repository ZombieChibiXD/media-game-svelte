import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Page from './+page.svelte';

describe('/+page.svelte', () => {
	it('renders play button linking to /loading', async () => {
		render(Page);

		const link = page.getByRole('link', { name: /play/i });
		await expect.element(link).toBeInTheDocument();
		await expect.element(link).toHaveAttribute('href', '/loading');
	});

	it('renders landing image', async () => {
		render(Page);

		const img = page.getByRole('img', { name: 'Landing' });
		await expect.element(img).toBeInTheDocument();
	});
});
