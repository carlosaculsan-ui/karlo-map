import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCCzFNkLnRNvaQEEd6cJ4FqUicbWcJwYoo",
  authDomain: "karlo-map.firebaseapp.com",
  projectId: "karlo-map",
  storageBucket: "karlo-map.firebasestorage.app",
  messagingSenderId: "985171495260",
  appId: "1:985171495260:web:3f0486806b072b44d35999",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
