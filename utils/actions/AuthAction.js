import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { child, getDatabase, ref, set } from "firebase/database";

import app from "../firebaseHelper";
import { authenticate } from "../../store/authSlice";

const createUser = async (firstName, lastName, email, userId) => {
  const name = `${firstName} ${lastName}`.toLowerCase();
  const userData = {
    firstName,
    lastName,
    name,
    email,
    userId,
    signUpDate: new Date().toISOString(),
  };
  const dbRef = ref(getDatabase());
  const childRef = child(dbRef, `users/${userId}`);
  await set(childRef, userData);
  return userData;
};

export const SignUp = (values) => async (dispatch) => {
  const { firstName, lastName, email, password } = values;
  const auth = getAuth(app);
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const { uid, stsTokenManager } = res.user;
    const { accessToken } = stsTokenManager;
    const data = await createUser(firstName, lastName, email, uid);
    dispatch(authenticate({ token: accessToken, userData: data }));
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      setError("The email address is already in use.");
    } else if (error.code === "auth/weak-password") {
      setError("The password is too weak.");
    } else {
      setError("An error occurred. Please try again later.");
    }
  }
};
