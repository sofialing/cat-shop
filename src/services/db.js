import firebase from 'firebase/app';
import 'firebase/firestore';

// Get a Firestore instance
export const db = firebase
	.initializeApp({ projectId: process.env.VUE_APP_ID })
	.firestore();

// Export types that exists in Firestore
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };
