import React, { useContext } from "react";
import { TouchableOpacity, Text, View, StyleSheet } from "react-native";

import MainContext from "../hooks/MainContext";
import { PER_PAGE } from "../vars";

export default function Pagination() {
  const { loading, items, totalCount, page, setPage, getItems } =
    useContext(MainContext);

  if (items.length === 0) return null;

  const getPageCount = () => Math.ceil(totalCount / PER_PAGE);

  const prevPage = () => {
    if (page > 1) {
      const nPage = page - 1;

      setPage(nPage);
      getItems({ page: nPage });
    }
  };

  const nextPage = () => {
    if (page < getPageCount()) {
      const nPage = page + 1;

      setPage(nPage);
      getItems({ page: nPage });
    }
  };

  return (
    <View style={s.wrap}>
      <TouchableOpacity
        style={s.pageBtn}
        activeOpacity={1}
        onPress={prevPage}
        disabled={loading}
      >
        <Text style={s.pageBtnText}>{"<"}</Text>
      </TouchableOpacity>

      <Text>
        {page}/{getPageCount()}
      </Text>

      <TouchableOpacity
        style={s.pageBtn}
        activeOpacity={1}
        onPress={nextPage}
        disabled={loading}
      >
        <Text style={s.pageBtnText}>{">"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "lightgray"
  },
  pageBtn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: "rgba(0,0,0,.05)"
  },
  pageBtnText: {
    color: "#000",
    fontWeight: "900"
  }
});
