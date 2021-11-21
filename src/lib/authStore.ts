import { writable } from 'svelte/store';

export const authStore = writable<{
	isLoggedIn: boolean;
	userid?: string;
	username?: string;
}>({
	isLoggedIn: false
});
