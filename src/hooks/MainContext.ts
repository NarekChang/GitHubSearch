import { createContext } from "react";

export default createContext({
  items: [],
  setItems: (items) => {
    console.log(items);
  }
});
