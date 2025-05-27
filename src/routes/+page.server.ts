import type { ServerLoadEvent } from '@sveltejs/kit';

export async function load({ fetch }: ServerLoadEvent) {
	const notesResponse = await fetch('/api/notes?limit=2');
	const notes: Note[] = await notesResponse.json();

	const workResponse = await fetch('/api/work?selected=true');
	const work: Work[] = await workResponse.json();

	return { notes, work };
}
