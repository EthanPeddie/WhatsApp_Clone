import {
  ActivityIndicator,
  Alert,
  Image,
  StyleSheet,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Formik } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { child, getDatabase, ref, set } from "firebase/database";
import * as Yup from "yup";

import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Logo from "../assets/images/logo.png";
import app from "../utils/firebaseHelper";
import colors from "../constants/colors";

const SignUpForm = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()

      .min(2, "Too Short!")

      .max(50, "Too Long!")

      .required("Required"),

    lastName: Yup.string()

      .min(2, "Too Short!")

      .max(50, "Too Long!")

      .required("Required"),

    email: Yup.string().email("Invalid email").required(),
    password: Yup.string().min(6, "Too Short!").max(50, "Too Long!").required(),
  });

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred", error);
    }
  }, [error]);

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

  const handleFormSubmit = async (values) => {
    setIsLoading(true);
    const { firstName, lastName, email, password } = values;
    const auth = getAuth(app);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const { uid } = res.user;
      const data = await createUser(firstName, lastName, email, uid);
      console.log(data);
    } catch (error) {
      console.log(error);
      if (error.code === "auth/email-already-in-use") {
        setError("The email address is already in use.");
      } else if (error.code === "auth/weak-password") {
        setError("The password is too weak.");
      } else {
        setError("An error occurred. Please try again later.");
      }
      setIsLoading(false);
    }
  };

  return (
    <>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Logo} resizeMode="contain" />
      </View>
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        onSubmit={handleFormSubmit}
        validationSchema={SignupSchema}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View>
            <Input
              id="firstName"
              label="First Name"
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              value={values.firstName}
              icon="user-o"
              iconPack={FontAwesome}
              autoCapitalize="none"
              placeholder="First Name"
              errorMessage={touched.firstName && errors.firstName}
            />

            <Input
              id="lastName"
              label="Last Name"
              icon="user-o"
              iconPack={FontAwesome}
              onChangeText={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
              value={values.lastName}
              autoCapitalize="none"
              placeholder="Last Name"
              errorMessage={touched.lastName && errors.lastName}
            />
            <Input
              id="email"
              label="Email"
              icon="mail"
              iconPack={Feather}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              keyboardType="email-address"
              autoCapitalize="none"
              placeholder="Email Address"
              errorMessage={touched.email && errors.email}
            />
            <Input
              id="password"
              label="Password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              icon="lock"
              iconPack={Feather}
              secureTextEntry
              autoCapitalize="none"
              placeholder="Password"
              errorMessage={touched.password && errors.password}
            />

            {isLoading ? (
              <ActivityIndicator
                size={"large"}
                color={colors.blue}
                style={{ marginTop: 15 }}
              />
            ) : (
              <SubmitButton
                // disable={!formData.formIsValid}
                title="Sign Up"
                onPress={handleSubmit}
              />
            )}
          </View>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "50%",
  },
});
