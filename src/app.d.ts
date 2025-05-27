// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	interface Note {
		slug: string;
		image: string;
		title: string;
		description: string;
		createdAt: string;
		updatedAt?: string;
		published: boolean;
	}

	interface Work extends Note {
		client: string;
		clientLink?: string;
		selected: boolean;
	}
}

export {};
