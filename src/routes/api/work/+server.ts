import { json } from '@sveltejs/kit';
import type { RequestEvent } from '@sveltejs/kit';

async function getAllWork() {
	let allWork: Work[] = [];

	const paths = import.meta.glob('/src/lib/work/*.svx', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.svx', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Work, 'slug'>;
			const work = { slug, ...metadata } satisfies Work;
			if (work.published) {
				allWork.push(work);
			}
		}
	}

	allWork = allWork.sort(
		(first, second) =>
			new Date(second.updatedAt ?? second.createdAt).getTime() -
			new Date(first.updatedAt ?? first.createdAt).getTime()
	);

	return allWork;
}

export async function GET({ url }: RequestEvent) {
	const allWork = await getAllWork();
	const limit = url.searchParams.get('limit');
	const selected = url.searchParams.get('selected');

	const selectedWork = selected ? allWork.filter((work) => work.selected) : allWork;
	const limitedWorks = limit ? selectedWork.slice(0, parseInt(limit)) : selectedWork;
	return json(limitedWorks);
}

export const prerender = true;
