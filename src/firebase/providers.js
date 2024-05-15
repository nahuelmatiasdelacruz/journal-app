import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try{
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    const {displayName,email,photoURL,uid} = result.user;
    return {
      ok: true,
      displayName, email, photoURL, uid
    }
  }catch(e){
    const errorMessage = e.message;
    return {
      ok: false,
      errorMessage,
    };
  };
};

export const registerUserWithEmailPassword = async ({email,password,displayName}) => {
  try{
    const response = await createUserWithEmailAndPassword(FirebaseAuth,email,password);
    const {uid,photoURL} = response.user;
    // Actualizar displayName en FIREBASE
    return {
      ok: true,
      uid,photoURL,email,displayName
    }
  }catch(e){
    return {
      ok: false,
      errorMessage: e.message
    };
  };
};