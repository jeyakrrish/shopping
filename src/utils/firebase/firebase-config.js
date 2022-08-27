import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import { getFirestore, doc, getDoc, getDocs, setDoc, collection, writeBatch, query } from 'firebase/firestore';

const firebaseConfig = {

  apiKey: "AIzaSyCbPtQQaN9_am4jqRHOnU6OybyU01zFDw0",
  authDomain: "crwn-clothing-db-16233.firebaseapp.com",
  projectId: "crwn-clothing-db-16233",
  storageBucket: "crwn-clothing-db-16233.appspot.com",
  messagingSenderId: "1028435304993",
  appId: "1:1028435304993:web:d6ea68ff548982f0143960"

};

const firebaseApp = initializeApp(firebaseConfig);      //firebase App

const googleProvider = new GoogleAuthProvider();  //new instance of GoogleAuthProvider
googleProvider.getCustomParameters({
  prompt: 'select_account'                      //google's features
});

export const auth = getAuth(firebaseApp);  //getting authentication            

//popupLogin
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore(firebaseApp);


export const addCollectionDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = collection(db, collectionKey);   //collectionKey = "category"
  const batch = writeBatch(db);

  //data adding with docRef using collectionRef
  objectsToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLocaleLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();   //commits data
  console.log("succesfully updated to firebase");
}
////////////////////////////////////////////////////////
export const getCollectionAndDocuments = async () => {          //used to avoid 3rd party sft updates issues
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
}

////////////////////////////////////////////////////////////////////////////////////////////

export const createUserDocumentFromAuth = async (userAuth, additionalInfornation) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);     //user doc reference

  const userSnapshot = await getDoc(userDocRef);        //return data object of uid
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfornation,
      });
    } catch (err) {
      console.log(err.message);
    }
  }

  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const SignInUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const onAuthStateChangedListener = (callback, errorCallback, completeCallback) => {
  onAuthStateChanged(auth, callback, errorCallback, completeCallback);
}
export const signOutUser = async () => await signOut(auth);

/**
 * Click stream
 *
 * next => callback triggered on Change
 * error  => callback triggered on error
 * compleated => callback triggered on Complete
 * */
