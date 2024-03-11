import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import colors from "../constants/colors";

const Input = ({ label, icon, size, iconPack: IconPack }) => {
  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.inputConatiner}>
        {icon && <IconPack name={icon} size={size || 20} style={styles.icon} />}
        <TextInput />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputConatiner: {
    borderWidth: 1,
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
});
