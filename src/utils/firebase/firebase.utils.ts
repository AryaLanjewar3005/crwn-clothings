import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAY3YtatSYHrbk8FhDRe2LZ3aYj8MiUGA0",
  authDomain: "crwn-clothing-db-f5ffd.firebaseapp.com",
  projectId: "crwn-clothing-db-f5ffd",
  storageBucket: "crwn-clothing-db-f5ffd.appspot.com",
  messagingSenderId: "90417789312",
  appId: "1:90417789312:web:0b26e07f39a69bca0b2965"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  promt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)


  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {displayName, email, createdAt})
    }
    
    catch (error){
      console.log('error creating user', error.message);
    }
  }
  return userDocRef;
}

