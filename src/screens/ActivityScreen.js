import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ActivityScreen = () => {
  return (
    <View style={styles.container}>
      <Text>This is Activity Screen</Text>
    </View>
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // margin: 10,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#b6ff5c",
  },
});
