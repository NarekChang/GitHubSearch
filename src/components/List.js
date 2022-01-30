import React, { useContext } from "react";
import { View, Text } from "react-native";

import MainContext from "../hooks/MainContext";

export default function List() {
  const { items } = useContext(MainContext);

  const renderItem = (item) => {
    return <Text key={item.id}>{item.id}</Text>;
  };

  return <View>{items.map(renderItem)}</View>;
}
