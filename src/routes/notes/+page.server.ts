import type { ServerLoadEvent } from '@sveltejs/kit';

export async function load({ fetch }: ServerLoadEvent) {
	const response = await fetch('/api/notes');
	const notes: Note[] = await response.json();
	return { notes };
}
