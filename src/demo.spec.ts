import { describe, it, expect } from 'vitest';
import { cn } from '$lib/utils';
import { animalListing } from '$lib/animalData';

describe('cn utility', () => {
	it('merges class strings', () => {
		expect(cn('foo', 'bar')).toBe('foo bar');
	});

	it('filters falsy values', () => {
		expect(cn('foo', false && 'bar', undefined, 'baz')).toBe('foo baz');
	});

	it('handles conditional objects', () => {
		expect(cn('base', { active: true, disabled: false })).toBe('base active');
	});

	it('resolves tailwind conflicts via twMerge', () => {
		expect(cn('px-4', 'px-2')).toBe('px-2');
	});
});

describe('animalListing', () => {
	it('contains at least 40 animals', () => {
		expect(animalListing.length).toBeGreaterThanOrEqual(40);
	});

	it('each animal has required fields', () => {
		for (const animal of animalListing) {
			expect(animal.type).toBeTruthy();
			expect(animal.name).toBeTruthy();
			expect(animal.description).toBeTruthy();
			expect(animal.hint).toBeTruthy();
			expect(typeof animal.x).toBe('number');
			expect(typeof animal.y).toBe('number');
			expect(typeof animal.width).toBe('number');
		}
	});

	it('all animal types are unique', () => {
		const types = animalListing.map((a) => a.type);
		expect(new Set(types).size).toBe(types.length);
	});
});
