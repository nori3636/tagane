import { writable } from 'svelte/store';

// export const isLogeedIn = writable(false);
// export const userid = writable();
export const authStore = writable<{
	isLoggedIn: boolean;
	userid?: string;
}>({
	isLoggedIn: false
});
