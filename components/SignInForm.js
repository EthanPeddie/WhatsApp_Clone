import { Image, StyleSheet, View } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

import Input from "./Input";
import SubmitButton from "./SubmitButton";
import Logo from "../assets/images/logo.png";

const SignUpForm = () => {
  return (
    <>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={Logo} resizeMode="contain" />
      </View>
      <Input label="Email" icon="mail" iconPack={Feather} />
      <Input label="Password" icon="lock" iconPack={Feather} />
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
