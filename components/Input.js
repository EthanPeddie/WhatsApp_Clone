import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Input = ({
  label,
  icon,
  size,
  iconPack: IconPack,
  errorMessage,
  inputChangeText,
  id,
  ...others
}) => {
  // const onChangeText = (text) => {
  //   inputChangeText(id, text);
  // };
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputConatiner}>
        {icon && <IconPack name={icon} size={size || 20} style={styles.icon} />}
        <TextInput {...others} />
      </View>
      {errorMessage && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </View>
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputConatiner: {
    borderRadius: 5,
    padding: 10,
    backgroundColor: colors.nearlyWhtie,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 10,
    color: colors.gray,
  },
  label: {
    marginVertical: 8,
    fontFamily: "bold",
    letterSpacing: 0.4,
  },
  errorContainer: {
    marginVertical: 6,
  },
  errorMessage: {
    color: "red",
    fontFamily: "regular",
  },
});
