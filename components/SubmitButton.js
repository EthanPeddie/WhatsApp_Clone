import { StyleSheet, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const SubmitButton = ({ disable, title, onPress }) => {
  const enabledBgColor = colors.primary;
  const disabledBgColor = colors.lightGray;
  const bgColor = disable ? disabledBgColor : enabledBgColor;
  return (
    <TouchableOpacity
      onPress={disable ? () => {} : onPress}
      style={{ ...styles.button, ...{ backgroundColor: bgColor } }}
    >
      <Text style={[styles.text, { color: disable ? colors.gray : "white" }]}>
        {title}
      </Text>
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
    marginTop: 20,
  },
  text: {
    fontFamily: "bold",
    fontSize: 15,
    letterSpacing: 0.4,
  },
});
