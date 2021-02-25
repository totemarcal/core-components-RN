import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const ActivityIndicatorExample = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator color="#0a40ff"/>
    <ActivityIndicator size="large" color="#0ff0ff"/>
    <ActivityIndicator size="small" color="#0000ff" />
    <ActivityIndicator size="large" color="#00ff00" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default ActivityIndicatorExample;