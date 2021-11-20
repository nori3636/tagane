import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from '../lib/env';
import { authStore } from './authStore';

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const db = getFirestore();

export const checkio = onAuthStateChanged(auth, (user) => {
	if (user) {
		// User is signed in, see docs for a list of available properties
		// https://firebase.google.com/docs/reference/js/firebase.User
		authStore.set({
			isLoggedIn: true,
			username: user.displayName,
			userid: user.uid
		});
		console.log('login');
		// ...
	} else {
		authStore.set({
			isLoggedIn: false
		});
		// User is signed out
		// ...
		console.log('logout');
	}
});
