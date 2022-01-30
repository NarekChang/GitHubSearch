import React from "react";
import { View, StyleSheet } from "react-native";

import List from "../components/List";
import SearchInput from "../components/SearchInput";

export default function MainScrn() {
  return (
    <View style={s.main}>
      <SearchInput />
      <List />
    </View>
  );
}

const s = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between"
  }
});
