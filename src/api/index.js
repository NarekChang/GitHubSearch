// @flow

import axios from "axios";
import {
  sort,
  usersUrl,
  issuesUrl,
  searchUrl,
  repositoriesUrl
} from "./config";

const EmptyResult = {
  items: [],
  total_count: 0
};

export const getUsers = async (query, page = 1) => {
  try {
    const res = axios.get(
      `${searchUrl}${usersUrl}?q=${query}&${sort}&page=${page}`
    );
    const { total_count = 0, items = [] } = res;

    return { items, total_count };
  } catch (e) {
    console.log(e);

    return EmptyResult;
  }
};

export const getIssues = async (query, page = 1) => {
  try {
    const res = axios.get(
      `${searchUrl}${issuesUrl}?q=${query}&${sort}&page=${page}`
    );
    const { total_count = 0, items = [] } = res;

    return { items, total_count };
  } catch (e) {
    console.log(e);

    return EmptyResult;
  }
};

export const getRepositories = async (query, page = 1) => {
  try {
    const res = axios.get(
      `${searchUrl}${repositoriesUrl}?q=${query}&${sort}&page=${page}`
    );
    const { total_count = 0, items = [] } = res;

    return { items, total_count };
  } catch (e) {
    console.log(e);

    return EmptyResult;
  }
};
