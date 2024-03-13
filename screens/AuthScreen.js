import { StyleSheet, Text } from "react-native";
import React from "react";
import PageContainer from "../components/PageContainer";
import Input from "../components/Input";
import { FontAwesome, Feather } from "@expo/vector-icons";
import SubmitButton from "../components/SubmitButton";

const AuthScreen = () => {
  return (
    <PageContainer>
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
        title="Submit"
        onPress={() => console.log("Click Click")}
      />
    </PageContainer>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
