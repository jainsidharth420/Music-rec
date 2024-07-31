import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyD3YH60A____PbVbrshR74LlPXbp4zBye0",
  authDomain: "music-recommendation-5816a.firebaseapp.com",
  projectId: "music-recommendation-5816a",
  storageBucket: "music-recommendation-5816a.appspot.com",
  messagingSenderId: "912183086761",
  appId: "1:912183086761:web:fe0dc2a9b1dc937f1ae3b8",
  measurementId: "G-XTJ7JJ91YC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, addDoc, getDocs }; // Ensure getDocs is exported
