import { createContext } from "react";
import { MODES } from "../vars";

export default createContext({
  query: 1,
  setQuery: (query) => {},
  mode: MODES[0],
  setMode: (mode) => {},
  page: 1,
  setPage: (page) => {},
  items: [],
  setItems: (items) => {},
  totalCount: 0,
  setTotalCount: (totalCount) => {},
  getItems: (newConfig) => {}
});
