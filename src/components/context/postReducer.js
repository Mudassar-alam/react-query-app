import React from "react";
// import  { FETCH_POST_ERROR, FETCH_POST_START ,FETCH_POST_SUCCESS } from './actions'
import {
  FETCH_POST_ERROR,
  FETCH_POST_START,
  FETCH_POST_SUCCESS,
} from "./types";
import fetchpostData from './actions'

export const initialState = {
  loading: false,
  post: {},
  error: false,
};

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_START:
      return {
        loading: true,
        error: true,
        post: {},
      };
    case FETCH_POST_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        post: action.payload,
      };
    }
    case FETCH_POST_ERROR: {
      return {
        loading: false,
        error: true,
        post: {},
      };
    }
    default:
      return state;
      
  }
};
