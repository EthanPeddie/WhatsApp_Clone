import { StyleSheet } from "react-native";
import React from "react";
import { FontAwesome, Feather } from "@expo/vector-icons";

import Input from "./Input";
import SubmitButton from "./SubmitButton";

const SignUpForm = () => {
  return (
    <>
      <Input
        label="First Name"
        icon="user-o"
        iconPack={FontAwesome}
        errorMessage="required"
      />
      <Input label="Last Name" icon="user-o" iconPack={FontAwesome} />
      <Input label="Email" icon="mail" iconPack={Feather} />
      <Input label="Password" icon="lock" iconPack={Feather} />
      <SubmitButton
        disable={false}
        title="Sign Up"
        onPress={() => console.log("Sign Up")}
      />
    </>
  );
};

export default SignUpForm;

const styles = StyleSheet.create({});
