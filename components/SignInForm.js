import { StyleSheet } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";

import Input from "./Input";
import SubmitButton from "./SubmitButton";

const SignUpForm = () => {
  return (
    <>
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

const styles = StyleSheet.create({});
