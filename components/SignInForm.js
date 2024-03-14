import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

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
        id="email"
        label="Email"
        icon="mail"
        iconPack={Feather}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="Email Address"
        inputChangeText={inputHandleChange}
      />
      <Input
        id="password"
        label="Password"
        icon="lock"
        iconPack={Feather}
        secureTextEntry
        autoCapitalize="none"
        placeholder="Password"
        inputChangeText={inputHandleChange}
      />
      <SubmitButton
        disable={false}
        title="Sign In"
        onPress={() => console.log("Sign In")}
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
