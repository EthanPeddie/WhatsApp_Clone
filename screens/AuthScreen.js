import { StyleSheet, Text } from "react-native";
import React from "react";
import PageContainer from "../components/PageContainer";
import Input from "../components/Input";
import { FontAwesome } from "@expo/vector-icons";

const AuthScreen = () => {
  return (
    <PageContainer>
      <Input label="First Name" icon="user" iconPack={FontAwesome} />
    </PageContainer>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({});
