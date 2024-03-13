import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const SubmitButton = ({ disable }) => {
  const enabledBgColor = colors.primary;
  const disabledBgColor = colors.lightGray;
  const bgColor = disable ? disabledBgColor : enabledBgColor;
  return (
    <TouchableOpacity style={{ ...styles.button, backgroundColor: bgColor }}>
      <Text style={{ color: disable ? colors.gray : "white" }}>Submit</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginVertical: 8,
  },
});
