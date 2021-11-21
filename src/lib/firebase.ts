import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { firebaseConfig } from '$lib/env';
import { user as userStore } from './stores/user';

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore();

export const checkio = onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in
		userStore.set({
			id: user.uid,
			name: user.displayName ?? ''
		});
		console.log('login');
	} else {
		userStore.set(undefined);
		// User is signed out
		console.log('logout');
	}
});
