import React, { useRef, useState } from "react";

import { AREAS } from "../vars";
import { searchRequest } from "../api";
import MainContext from "../hooks/MainContext";

export default function MainProvider({ children }) {
  const [page, setPage] = useState(1);
  const [area, setArea] = useState(AREAS[0]);
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState(0);

  const seqSef = useRef(0);

  const getItems = async (newConfig = {}) => {
    setItems([]);
    setLoading(true);

    // reset value of "page" if it is not set
    const config = {
      page: 1,
      area,
      query,
      ...newConfig
    };

    const { page: nPage, area: nArea, query: nQuery } = config;

    let expectedSef = seqSef.current;

    const res = await searchRequest(nArea, nQuery, nPage);
    const { total_count = 0, items = [] } = res;

    // check relevance of request
    if (expectedSef !== seqSef.current) return;

    seqSef.current++;

    setPage(nPage);
    setItems(items);
    setTotalCount(total_count);
    setLoading(false);
  };

  const state = {
    area,
    setArea,
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
