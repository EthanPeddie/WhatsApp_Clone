import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { FontAwesome, Feather } from "@expo/vector-icons";

import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Logo from "../assets/images/logo.png";

const SignUpForm = () => {
  const inputHandleChange = (inputId, inputValue) => {
    console.log("id: " + inputId);
    console.log("value: " + inputValue);
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
      />
      <Input
        id="last name"
        label="Last Name"
        icon="user-o"
        iconPack={FontAwesome}
        inputChangeText={inputHandleChange}
      />
      <Input
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        inputChangeText={inputHandleChange}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        inputChangeText={inputHandleChange}
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
