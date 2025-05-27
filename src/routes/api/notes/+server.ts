import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

async function getNotes() {
	let notes: Note[] = [];

	const paths = import.meta.glob('/src/lib/notes/*.svx', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.svx', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Note, 'slug'>;
			const note = { slug, ...metadata } satisfies Note;
			if (note.published) {
				notes.push(note);
			}
		}
	}

	notes = notes.sort(
		(first, second) =>
			new Date(second.updatedAt ?? second.createdAt).getTime() -
			new Date(first.updatedAt ?? first.createdAt).getTime()
	);

	return notes;
}

export async function GET({ url }: RequestEvent) {
	const notes = await getNotes();
	const limit = url.searchParams.get('limit');

	const limitedNotes = limit ? notes.slice(0, parseInt(limit)) : notes;
	return json(limitedNotes);
}

export const prerender = true;
