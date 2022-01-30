import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ListEmptyComponent() {
  return (
    <View style={s.wrap}>
      <Text style={s.emptyText}>List is empty</Text>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {
    paddingVertical: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyText: {
    fontSize: 18
  }
});
