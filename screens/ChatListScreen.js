import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

const ChatListScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>ChatListScreen</Text>
      <Button
        title="Go to Chat Settings"
        onPress={() => navigation.navigate("ChatSettings")}
      />
    </View>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
