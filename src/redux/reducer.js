// src/redux/reducer.js

import { SET_COUNTRY_DATA } from './constant';

const initialState = {
  countryData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRY_DATA:
      return {
        ...state,
        countryData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
