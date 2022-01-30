import React, { useContext } from "react";
import { Text, View, StyleSheet, ActivityIndicator } from "react-native";

import MainContext from "../hooks/MainContext";

export default function ListEmptyComponent() {
  const { loading } = useContext(MainContext);

  if (loading)
    return (
      <View style={s.wrap}>
        <ActivityIndicator color={"#000"} size={"large"} />
      </View>
    );

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
