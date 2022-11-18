import axios from "axios";
import { SERVER_URL } from "../../config/index";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_ACTIVITIES = "GET_ALL_ACTIVITIES";
export const GET_COUNTRY_DETAILS = "GET_COUNTRY_DETAILS";
export const REMOVE_COUNTRY = "REMOVE_COUNTRY";
export const CREATE_ACTIVITY = "CREATE_ACTIVITY";
export const SET_NAME = "SET_NAME";
export const SET_PAGE = "SET_PAGE";
export const SET_ORDER_A = "SET_ORDER_A";
export const SET_ORDER_P = "SET_ORDER_P";
export const SET_FILTER_A = "SET_FILTER_A";
export const FILTER_COUNTRIES = "FILTER_COUNTRIES";

export const getCountries = ({ page, orderA, orderP, filterA, name }) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${SERVER_URL}countries?page=${page ? page : 1}&orderA=${
          orderA ? orderA : ""
        }&orderP=${orderP ? orderP : ""}&filterA=${
          filterA ? filterA : ""
        }&name=${name ? name : ""}`
      );
      return dispatch({
        type: GET_COUNTRIES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCountryDetails = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`${SERVER_URL}countries/${id}`);
      return dispatch({
        type: GET_COUNTRY_DETAILS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const removeCountry = () => {
  return {
    type: REMOVE_COUNTRY,
    payload: {},
  };
};

export const createActivity = (activity) => {
  return (dispatch) => {
    try {
      axios.post(`${SERVER_URL}activities/`, activity).then(() => {
        return dispatch({
          type: CREATE_ACTIVITY,
        });
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getActivities = ({ name }) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `${SERVER_URL}activities?name=${name ? name : ""}`
      );
      return dispatch({
        type: GET_ACTIVITIES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const setFilterA = (activity) => {
  return {
    type: SET_FILTER_A,
    payload: activity,
  };
};

export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};
export const setPage = (page) => {
  return {
    type: SET_PAGE,
    payload: page,
  };
};

export const setOrderA = (order) => {
  return {
    type: SET_ORDER_A,
    payload: order,
  };
};

export const setOrderP = (order) => {
  return {
    type: SET_ORDER_P,
    payload: order,
  };
};

export const filterCountries = (continent) => {
  return {
    type: FILTER_COUNTRIES,
    payload: continent,
  };
};
