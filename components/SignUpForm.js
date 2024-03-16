import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { FontAwesome, Feather } from "@expo/vector-icons";
import { Formik } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import * as Yup from "yup";

import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Logo from "../assets/images/logo.png";
import app from "../utils/firebaseHelper";

const SignUpForm = () => {
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

  const handleFormSubmit = async (values) => {
    const { firstName, lastName, email, password } = values;
    const auth = getAuth(app);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (error) {
      console.log(error);
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

            <SubmitButton
              // disable={!formData.formIsValid}
              title="Sign Up"
              onPress={handleSubmit}
            />
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
