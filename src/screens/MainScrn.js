import React from "react";
import { View, StyleSheet } from "react-native";

import SearchInput from "../components/SearchInput";

export default function MainScrn() {
  return (
    <View style={s.main}>
      <SearchInput />
    </View>
  );
}

const s = StyleSheet.create({
  main: {
    backgroundColor: "red"
  }
});
