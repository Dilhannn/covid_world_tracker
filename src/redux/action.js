// src/redux/actions.js

import { SET_COUNTRY_DATA,FETCH_COUNTRY_DATA_REQUEST  } from './constant';

export const setCountryData = (data) => {
    return{
        type: SET_COUNTRY_DATA,
        payload: data,
    }
};

export const fetchCountryDataRequest = (countryCode) => {
    return {
        type: FETCH_COUNTRY_DATA_REQUEST,
        payload: countryCode,
    };
};
