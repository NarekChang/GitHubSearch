import React, { useState } from "react";
import MainContext from "../hooks/MainContext";

export default function MainProvider({ children }) {
  const [items, setItems] = useState([]);

  const state = {
    items,
    setItems
  };

  return <MainContext.Provider value={state}>{children}</MainContext.Provider>;
}
