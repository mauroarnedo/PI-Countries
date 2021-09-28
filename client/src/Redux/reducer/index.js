import {
    GET_COUNTRIES,
    GET_ACTIVITIES,
    GET_COUNTRY_DETAILS,
    SET_NAME,
    SET_PAGE,
    SET_ORDER,
    REMOVE_ACTIVITY,
    FILTER_CONTINENT,
    FILTER_ACTIVITY
} from '../actions/index.js'

const initialState = {
    countries: [],
    country: {},
    activities: [],
    name: "",
    order: "",
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
        case SET_ORDER:
            return {
                ...state,
                order: payload
            }
        case REMOVE_ACTIVITY:
            return {
                ...state,
                activity: payload
            }
        case FILTER_CONTINENT:
            const filterCountries = state.countries.result.filter(c => {
                return c.continent === payload
            })
            return {
                ...state,
                countries: {
                    ...state.countries,
                    result: filterCountries
                }
            }
        case FILTER_ACTIVITY:
            const filterCountries = state.countries.result.filter(c => {
                return c.activities === payload
            })
            return {
                ...state,
                countries: {
                    ...state.countries,
                    result: filterCountries
                }
            }
        default:
            return state
    }
}