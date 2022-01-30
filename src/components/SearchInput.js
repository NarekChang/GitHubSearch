import React, { useState, useContext } from "react";
import { View, StyleSheet, TextInput } from "react-native";

import { MODES } from "../vars";
import ModeSelector from "./ModeSelector";
import MainContext from "../hooks/MainContext";

const TYPING_DURATION = 300;

export default function SearchInput() {
  const { getItems, query, setQuery } = useContext(MainContext);

  const [typingTimeout, setTypingTimeout] = useState(0);

  const renderCheckbox = (item = "") => (
    <ModeSelector key={item} value={item} />
  );

  // Отправляем запрос только, когда с последнего нажатия
  // клавиши прошло больше TYPING_DURATION миллисекунд
  // Так мы поймем, что пользователь перестал убрал руки
  // от клавиатуры
  const sendRequest = (query) => () => getItems({ query });

  const changeQuery = (nQuery) => {
    if (typingTimeout) clearTimeout(typingTimeout);

    setQuery(nQuery);

    setTypingTimeout(setTimeout(sendRequest(nQuery), TYPING_DURATION));
  };

  return (
    <View style={s.main}>
      <TextInput
        value={query}
        placeholder="Enter"
        style={s.textInput}
        onChangeText={changeQuery}
      />

      <View style={s.modesWrap}>{MODES.map(renderCheckbox)}</View>
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
  modesWrap: {
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
