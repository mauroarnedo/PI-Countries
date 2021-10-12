import {
    GET_COUNTRIES,
    GET_ACTIVITIES,
    GET_COUNTRY_DETAILS,
    SET_NAME,
    SET_PAGE,
    SET_ORDER_A,
    SET_ORDER_P,
    SET_FILTER_A,
    FILTER_COUNTRIES
} from '../actions/index.js'

const initialState = {
    countries: [],
    country: {},
    activities: [],
    name: "",
    orderA: "",
    orderP: "",
    filterA: "",
    page: 1
}

export default function reducer(state = initialState, { type, payload }) {
    switch (type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: payload
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
        case SET_ORDER_A:
            return {
                ...state,
                orderA: payload
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
        case FILTER_COUNTRIES:
            let newCountries = state.countries.all.filter(c => {
                return c.continent === payload
            })
            return {
                ...state,
                countries: {
                    ...state.countries,
                    result: newCountries
                }
            }
        default:
            return state
    }
}