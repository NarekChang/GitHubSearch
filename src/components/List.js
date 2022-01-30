import React, { useContext } from "react";
import { View, StyleSheet, Text, Image, VirtualizedList } from "react-native";

import MainContext from "../hooks/MainContext";
import { MODES } from "../vars";

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
    <VirtualizedList
      style={s.wrap}
      vertical
      data={items}
      windowSize={1}
      snapToInterval={60}
      decelerationRate="fast"
      snapToAlignment="start"
      renderItem={renderItem}
      getItemCount={(data) => data.length}
      getItem={(data, index) => data[index]}
      keyExtractor={({ id }) => `ListItem${id}`}
      showsVerticalScrollIndicator={false}
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
