import {
    GET_COUNTRIES,
    GET_ACTIVITIES,
    GET_COUNTRY_DETAILS,
    SET_NAME,
    SET_PAGE,
    SET_ORDER_P,
    SET_FILTER_A,
    FILTER_CONTINENT
} from '../actions/index.js'

const initialState = {
    countries: [],
    countriesOrder: [],
    country: {},
    activities: [],
    name: "",
    orderP: "",
    filterA: "",
    page: 1
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload,
                countriesOrder: payload
            }
        case GET_ACTIVITIES:
            return {
                ...state,
                activities: payload
            }
        case GET_COUNTRY_DETAILS:
            return {
                ...state,
                country: payload
            }
        case SET_NAME:
            return {
                ...state,
                name: payload
            }
        case SET_PAGE:
            return {
                ...state,
                page: payload
            }
        case SET_ORDER_P:
            return {
                ...state,
                orderP: payload
            }
        case SET_FILTER_A:
            return {
                ...state,
                filterC: payload
            }
        case ORDER_COUNTRIES:
            return {
                ...state,
                countries: payload.slice(),
            };    
        case FILTER_CONTINENT:
            return {
                ...state,
                countries: payload
            };
        default:
            return state
    }
}