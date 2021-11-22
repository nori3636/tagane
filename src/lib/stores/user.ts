import { auth } from '$lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import type { Readable } from 'svelte/store';
import { readable } from 'svelte/store';

export type UserInfo = {
	id: string;
	name: string;
};

export const user: Readable<UserInfo | undefined> = readable<UserInfo | undefined>(
	undefined,
	(set) => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user === null) set(undefined);
			else set({ id: user.uid, name: user.displayName ?? '' });
		});
		return () => unsubscribe();
	}
);
