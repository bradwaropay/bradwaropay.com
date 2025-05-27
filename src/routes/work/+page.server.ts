import type { ServerLoadEvent } from '@sveltejs/kit';

export async function load({ fetch }: ServerLoadEvent) {
	const response = await fetch('/api/work');
	const work: Work[] = await response.json();
	return { work };
}
