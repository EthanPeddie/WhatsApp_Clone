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

import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Logo from "../assets/images/logo.png";
import colors from "../constants/colors";
import { SignupSchema } from "../utils/validation";
import { SignUp } from "../utils/actions/AuthAction";

const SignUpForm = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (error) {
      Alert.alert("An error occurred", error);
    }
  }, [error]);

  const handleFormSubmit = async (values) => {
    setIsLoading(true);
    try {
      await SignUp(values);
    } catch (error) {
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
