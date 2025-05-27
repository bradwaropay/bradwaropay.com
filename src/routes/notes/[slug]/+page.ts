import { error } from '@sveltejs/kit';
import type { ServerLoadEvent } from '@sveltejs/kit';

export const load = async ({ params }: ServerLoadEvent) => {
	try {
		const note = await import(`$lib/notes/${params.slug}.svx`);

		return {
			meta: note.metadata,
			content: note.default
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
};
