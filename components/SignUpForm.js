import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { FontAwesome, Feather } from "@expo/vector-icons";

import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Logo from "../assets/images/logo.png";
import validateInput from "../utils/actions/FormAction";

const SignUpForm = () => {
  const inputHandleChange = (inputId, inputValue) => {
    console.log(validateInput(inputId, inputValue));
  };
  return (
    <>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Logo} resizeMode="contain" />
      </View>
      <Input
        id="first name"
        label="First Name"
        icon="user-o"
        iconPack={FontAwesome}
        errorMessage="required"
        inputChangeText={inputHandleChange}
        autoCapitalize="none"
        placeholder="First Name"
      />
      <Input
        id="last name"
        label="Last Name"
        icon="user-o"
        iconPack={FontAwesome}
        inputChangeText={inputHandleChange}
        autoCapitalize="none"
        placeholder="Last Name"
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        inputChangeText={inputHandleChange}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="Email Address"
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        inputChangeText={inputHandleChange}
        secureTextEntry
        autoCapitalize="none"
        placeholder="Password"
      />
      <SubmitButton
        disable={false}
        title="Sign Up"
        onPress={() => console.log("Sign Up")}
      />
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
