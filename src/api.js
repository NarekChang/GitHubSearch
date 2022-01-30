import axios from "axios";
import { sort, searchUrl } from "./vars";

const EmptyResult = {
  items: [],
  total_count: 0
};

export const searchRequest = async (mode = "users", query = "", page = 1) => {
  try {
    const res = await axios.get(
      `${searchUrl}/${mode}?q=${query}&${sort}&page=${page}`
    );
    
    const { data = {} } = res;
    const { total_count = 0, items = [] } = data;

    return { items, total_count };
  } catch (e) {
    console.log(e);

    return EmptyResult;
  }
};