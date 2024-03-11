import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextInput } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

import BackgroundImage from "../assets/images/droplet.jpeg";
import colors from "../constants/colors";

const ChatScreen = () => {
  const [messageText, setMessageText] = useState("");
  console.log(messageText);
  return (
    <SafeAreaView edges={["left", "right", "bottom"]} style={styles.container}>
      <ImageBackground
        source={BackgroundImage}
        style={styles.image}
      ></ImageBackground>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          onPress={() => console.log("Press")}
          style={styles.mediaButton}
        >
          <Feather name="plus-circle" size={24} color={colors.blue} />
        </TouchableOpacity>
        <TextInput
          style={styles.textBox}
          onChangeText={(text) => setMessageText(text)}
        />
        {messageText === "" && (
          <TouchableOpacity
            onPress={() => console.log("Press")}
            style={styles.mediaButton}
          >
            <Feather name="camera" size={24} color={colors.blue} />
          </TouchableOpacity>
        )}
        {messageText != "" && (
          <TouchableOpacity
            onPress={() => console.log("Press")}
            style={styles.mediaButton}
          >
            <Feather name="send" size={24} color={colors.blue} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: { flex: 1 },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  textBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: colors.lightGray,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  mediaButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
});
