import { auth } from '$lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import type { Readable } from 'svelte/store';
import { writable } from 'svelte/store';

export type UserInfo = {
	id: string;
	name: string;
};

export const user: Readable<UserInfo | undefined> = (() => {
	const { subscribe, set } = writable<UserInfo | undefined>(undefined);

	onAuthStateChanged(auth, (user) => {
		if (user === null) set(undefined);
		else set({ id: user.uid, name: user.displayName ?? '' });
	});

	return { subscribe };
})();
