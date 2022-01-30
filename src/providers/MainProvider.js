import React, { useState } from "react";

import { MODES } from "../vars";
import { searchRequest } from "../api";
import MainContext from "../hooks/MainContext";

export default function MainProvider({ children }) {
  const [page, setPage] = useState(1);
  const [mode, setMode] = useState(MODES[0]);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const getItems = async (newConfig = {}) => {
    setItems([]);
    setLoading(true);

    const config = {
      page: 1,
      mode,
      query,
      ...newConfig
    };

    const { page: nPage, mode: nMode, query: nQuery } = config;

    const res = await searchRequest(nMode, nQuery, nPage);
    const { total_count = 0, items = [] } = res;

    setPage(nPage);
    setItems(items);
    setTotalCount(total_count);
    setLoading(false);
  };

  const state = {
    mode,
    setMode,
    page,
    setPage,
    query,
    setQuery,
    items,
    setItems,
    totalCount,
    setTotalCount,
    getItems,
    loading,
    setLoading
  };

  return <MainContext.Provider value={state}>{children}</MainContext.Provider>;
}
