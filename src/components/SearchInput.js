import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, TextInput } from "react-native";

import { AREAS } from "../vars";
import AreaSelector from "./AreaSelector";
import MainContext from "../hooks/MainContext";

const TYPING_DURATION = 300;

export default function SearchInput() {
  const { getItems, query, setQuery } = useContext(MainContext);

  const [typingTimeout, setTypingTimeout] = useState(0);

  const renderCheckbox = (item = "") => (
    <AreaSelector key={item} value={item} />
  );

  const sendRequest = (query) => () => getItems({ query });

  const changeQuery = (nQuery) => {
    if (typingTimeout) clearTimeout(typingTimeout);

    setQuery(nQuery);

    // Timeout for text typing
    setTypingTimeout(setTimeout(sendRequest(nQuery), TYPING_DURATION));
  };

  useEffect(() => {
    return () => {
      clearTimeout(typingTimeout);
    };
  }, []);

  return (
    <View style={s.main}>
      <TextInput
        value={query}
        placeholder="Enter"
        style={s.textInput}
        onChangeText={changeQuery}
      />

      <View style={s.areasWrap}>{AREAS.map(renderCheckbox)}</View>
    </View>
  );
}

const s = StyleSheet.create({
  main: {
    paddingHorizontal: 12,
    paddingTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: "grey"
  },
  areasWrap: {
    marginLeft: -6,
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  textInput: {
    paddingHorizontal: 6,
    height: 42,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "grey"
  }
});
