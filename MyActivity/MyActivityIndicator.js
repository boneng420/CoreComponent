import React from "react";
import { ActivityIndicator as MyActivityIndicator, StyleSheet, View } from "react-native";

const App = () => (
  <View style={[styles.container, styles.horizontal]}>
    <MyActivityIndicator />
    <MyActivityIndicator size="large" />
    <MyActivityIndicator size="small" color="#0000ff" />
    <MyActivityIndicator size="large" color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});

export default App;