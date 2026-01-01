import type { RequestHandler } from '@sveltejs/kit';

const SITE_URL = 'https://bradwaropay.com';
const SITE_TITLE = 'Brad Waropay';
const SITE_DESCRIPTION = 'Notes from Brad Waropay';

async function getNotes(): Promise<Note[]> {
	let notes: Note[] = [];

	const paths = import.meta.glob('/src/lib/content/notes/*.svx', { eager: true });

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

function escapeXml(text: string): string {
	return text
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function formatDate(dateStr: string): string {
	// Convert "2026.01.01" format to RFC 822 date
	const normalized = dateStr.replace(/\./g, '-');
	const date = new Date(normalized);
	return date.toUTCString();
}

export const GET: RequestHandler = async () => {
	const notes = await getNotes();

	const items = notes
		.map(
			(note) => `
		<item>
			<title>${escapeXml(note.title)}</title>
			<link>${SITE_URL}/notes/${note.slug}</link>
			<guid isPermaLink="true">${SITE_URL}/notes/${note.slug}</guid>
			<description>${escapeXml(note.description)}</description>
			<pubDate>${formatDate(note.updatedAt ?? note.createdAt)}</pubDate>
		</item>`
		)
		.join('');

	const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
	<channel>
		<title>${escapeXml(SITE_TITLE)}</title>
		<link>${SITE_URL}</link>
		<description>${escapeXml(SITE_DESCRIPTION)}</description>
		<language>en-us</language>
		<atom:link href="${SITE_URL}/feed" rel="self" type="application/rss+xml" />
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
	</channel>
</rss>`;

	return new Response(rss.trim(), {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=0, s-maxage=3600'
		}
	});
};

export const prerender = true;
