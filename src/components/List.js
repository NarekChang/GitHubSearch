import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";

import { MODES } from "../vars";
import Pagination from "./Pagination";
import MainContext from "../hooks/MainContext";
import ListEmptyComponent from "./ListEmptyComponent";

export default function List() {
  const { items, mode } = useContext(MainContext);

  const getItemName = ({ login = "", title = "", full_name = "", id = "" }) => {
    if (mode === MODES[0]) return login;
    if (mode === MODES[1]) return title;

    return full_name || id;
  };

  const getItemUri = ({ avatar_url = "", owner = {}, user = {} }) => {
    if (mode === MODES[0]) return avatar_url;
    if (mode === MODES[1]) return user.avatar_url || "";

    return owner.avatar_url || "";
  };

  const renderItem = ({ item }) => {
    const name = getItemName(item);
    const uri = getItemUri(item);

    return (
      <View key={item.id} style={s.itemWrap}>
        {!!uri && <Image source={{ uri }} style={s.itemAvatar} />}

        <Text style={s.itemText} numberOfLines={1}>
          {name}
        </Text>
      </View>
    );
  };

  return (
    <FlatList
      vertical
      data={items}
      windowSize={1}
      style={s.wrap}
      renderItem={renderItem}
      keyExtractor={({ id }) => `ListItem${id}`}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={Pagination}
      ListFooterComponent={Pagination}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
}

const s = StyleSheet.create({
  itemWrap: {
    paddingHorizontal: 16,
    height: 60,
    backgroundColor: "rgba(0,0,0,0.05)",
    borderBottomColor: "#fff",
    borderBottomWidth: 2,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  itemText: {
    paddingRight: 40,
    paddingLeft: 16,
    color: "#000",
    fontWeight: "600"
  },
  itemAvatar: {
    width: 36,
    height: 36,
    borderRadius: 36,
    borderWidth: 1,
    borderColor: "#000"
  }
});
