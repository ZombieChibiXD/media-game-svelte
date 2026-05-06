import { expect, test } from '@playwright/test';

test('home page loads and navigates to loading', async ({ page }) => {
	await page.goto('/');

	await expect(page.locator('a[title="Play game"]')).toBeVisible();

	await page.click('a[title="Play game"]');
	await expect(page).toHaveURL('/loading');
});

test('main menu has play link to level select', async ({ page }) => {
	await page.goto('/main-menu');

	await expect(page.locator('a[href="/level-select"]')).toBeVisible();
});
