// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: 'AIzaSyDQYmQukkyJCnlrK0_K47fDLmB8D5z9m2Y',
  authDomain: 'spiritual-gpt-156d8.firebaseapp.com',
  projectId: 'spiritual-gpt-156d8',
  storageBucket: 'spiritual-gpt-156d8.appspot.com',
  messagingSenderId: '778857586486',
  appId: '1:778857586486:web:70c90a57cf833f1db55d97',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getDatabase(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider, app, db }
