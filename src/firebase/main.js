import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: 'AIzaSyCq-sb7xmngwV2PfOvoMZMh8GLjTi4bpxs',
  authDomain: 'travel-agency-7ecb6.firebaseapp.com',
  projectId: 'travel-agency-7ecb6',
  storageBucket: 'travel-agency-7ecb6.appspot.com',
  messagingSenderId: '241160148410',
  appId: '1:241160148410:web:b5c42a78154c42e10f3983',
  measurementId: "G-GTHES8V41S"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
