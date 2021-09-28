import axios from 'axios';

export const GET_COUNTRIES = 'GET_COUNTRIES';
export const GET_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const GET_COUNTRY_DETAILS = 'GET_COUNTRY_DETAILS';
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const REMOVE_ACTIVITY = 'REMOVE_ACTIVITY';
export const FILTER_CONTINENT = 'FILTER_CONTINENT';
export const FILTER_ACTIVITY = 'FILTER_ACTIVITY';
export const SET_NAME = 'SET_NAME';
export const SET_PAGE = 'SET_PAGE';
export const SET_ORDER = 'SET_ORDER';

export const getCountries = ({ page, order, name }) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`http://localhost:3001/countries?page=${page ? page : 1}&order=${order ? order : ""}&name=${name ? name : ""}`)
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

export const createActivity = (activity) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`http://localhost:3001/activities/`, activity)
            return dispatch({
                type: CREATE_ACTIVITY,
                payload: response.data
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
            next(error)
        }

    }
}

export const removeActivity = () => {
    return {
        type: REMOVE_ACTIVITY,
        payload: {}
    }
}
export const filterActivity = (activity) => {
    return {
        type: FILTER_ACTIVITY,
        payload: activity
    }
}
export const filterContinent = (continent) => {
    return {
        type: FILTER_CONTINENT,
        payload: continent
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
export const setOrder = (order) => {
    return {
        type: SET_ORDER,
        payload: order
    }
}