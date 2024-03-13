import { StyleSheet, Text } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

import PageContainer from "../components/PageContainer";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";
import colors from "../constants/colors";

const AuthScreen = () => {
  const [isSignUp, setSignUp] = useState(false);
  return (
    <PageContainer>
      {isSignUp ? <SignUpForm /> : <SignInForm />}
      <TouchableOpacity
        style={styles.linkContainer}
        onPress={() => setSignUp((prevState) => !prevState)}
      >
        <Text style={styles.linkText}>{`Switch to ${
          isSignUp ? "Sign In" : "Sign Up"
        }`}</Text>
      </TouchableOpacity>
    </PageContainer>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  linkContainer: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  linkText: {
    color: colors.blue,
    fontFamily: "medium",
    letterSpacing: 0.4,
  },
});
