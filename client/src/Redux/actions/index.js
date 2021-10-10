import axios from 'axios';
import { countriesOrderFilter } from '../../utils';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const SET_NAME = 'SET_NAME';
export const SET_PAGE = 'SET_PAGE';
export const SET_ORDER_P = 'SET_ORDER_P';
export const SET_FILTER_A = 'SET_FILTER_A';
export const FILTER_COUNTRIES = 'FILTER_COUNTRIES';
export const ORDER_COUNTRIES = 'ORDER_COUNTRIES';

export const getCountries = ({ page, orderP, filterA, name }) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/countries?page=${page ? page : 1}&orderP=${orderP ? orderP : ""}&filterA=${filterA ? filterA : ""}&name=${name ? name : ""}`)
            return dispatch({
                type: GET_COUNTRIES,
                payload: response.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export const getCountryDetails = (id) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/countries/${id}`)
            return dispatch({
                type: GET_COUNTRY_DETAILS,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }

    }
}

export const removeCountry = () => {
    return {
        type: REMOVE_COUNTRY,
        payload: {}
    }
}

export const createActivity = (activity) => {
    return (dispatch) => {
        try {
            axios.post(`http://localhost:3001/activities/`, activity)
                .then(() => {
                    return dispatch({
                        type: CREATE_ACTIVITY
                    })
                })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getActivities = ({ name }) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/activities?name=${name ? name : ""}`)
            return dispatch({
                type: GET_ACTIVITIES,
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }

    }
}

export const setFilterA = (activity) => {
    return {
        type: SET_FILTER_A,
        payload: activity
    }
}

export const setName = (name) => {
    return {
        type: SET_NAME,
        payload: name
    }
}
export const setPage = (page) => {
    return {
        type: SET_PAGE,
        payload: page
    }
}

export const setOrderP = (order) => {
    return {
        type: SET_ORDER_P,
        payload: order
    }
}

export function orderCountries(orderTarget, criteria) {
    return async function (dispatch) {
        countriesOrderFilter(orderTarget, criteria)
        .then((orderTarget) => {
               
            return dispatch({
                    type: ORDER_COUNTRIES,
                    payload: orderTarget,
                })
            })
    }
}

export function filterCountries(orderTarget, criteria) {
    return async function (dispatch) {
        countriesOrderFilter(orderTarget, criteria)
        .then((orderTarget) => {
               
            return dispatch({
                    type: FILTER_COUNTRIES,
                    payload: orderTarget,
                })
            })
    }
}
