import { writable } from 'svelte/store';

export type UserInfo = {
	id: string;
	name: string;
};

export const user = writable<UserInfo | undefined>(undefined);
