// store.js
import { createStore } from "redux";

// Define action types
const LOGIN_USER = "LOGIN_USER";
const LOGOUT_USER = "LOGOUT_USER";
const SET_FILTER = "SET_FILTER";
const ADD_KEYWORD = "SET_KEYWORD";
const RESET_FILTERS = "RESET_FILTERS";

// Define actions
export const loginUser = (userInfo) => ({
  type: LOGIN_USER,
  payload: userInfo,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const setFilter = (filter) => ({
  // Action creator for setting filter
  type: SET_FILTER,
  payload: filter,
});

export const addKeyword = (keyword) => ({
  type: ADD_KEYWORD,
  payload: keyword,
});

export const resetFilters = () => ({
  type: RESET_FILTERS,
});

// Define reducer
const initialState = {
  user: null,
  filters: {
    sortBy: "default", // Initial value for sort by
    category: "all", // Initial value for category
  },
  keyword: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.key]: action.payload.value,
        },
      };
    case ADD_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
      };
    case RESET_FILTERS:
      return {
        ...state,
        filters: initialState.filters,
        keyword: initialState.keyword,
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
