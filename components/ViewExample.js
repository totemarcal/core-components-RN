import React from "react";
import { View, Text } from "react-native";

const ViewExample = ({ navigation }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        height: 100,
        padding: 20
      }}
    >
      <View style={{ backgroundColor: "blue", flex: 0.3 }} />
      <View style={{ backgroundColor: "red", flex: 0.5 }} />
      <Text>Hello World!</Text>
    </View>
  );
};

export default ViewExample;