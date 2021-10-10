import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCountries, setOrderP, setFilterA, orderCountries, filterCountries } from "../../Redux/actions";

export default function OrdersFilters() {
    const { countriesOrder, activities } = useSelector(state => state)
    const dispatch = useDispatch()

    const handleOrderByName = (e) => {
        if (e.target.value === 'name') {
            dispatch(getCountries({}))
        }
        orderCountries(countriesOrder, { name: e.target.value })
    }

    const handleOrderByPopulation = (e) => {
        dispatch(setOrderP(e.target.value))
        dispatch(getCountries({ orderP: e.target.value }))
    }

    const filterByContinent = (e) => {
        if (e.target.value === 'filter') {
            dispatch(getCountries({}))
        }
        filterCountries(countriesOrder, { continent: e.target.value })

    }

    const filterByActivities = (e) => {
        dispatch(setFilterA(e.target.value))
        dispatch(getCountries({ filterA: e.target.value }))
    }

    return (
        <div>
            <div>
                <select onChange={handleOrderByName}>
                    <option value="name" label="Order alphabetic"></option>
                    <option value="Asc">A-Z</option>
                    <option value="Desc">Z-A</option>
                </select>
            </div>
            <div>
                <select onChange={handleOrderByPopulation}>
                    <option value="population" label="Order by population"></option>
                    <option value="higher">Higher</option>
                    <option value="lower">Lower</option>
                </select>
            </div>
            <div>
                <select onChange={filterByContinent}>
                    <option value="filter" label="Filter by continent"></option>
                    <option value="Africa" label="Africa"></option>
                    <option value="Americas" label="América"></option>
                    <option value="Asia" label="Asia"></option>
                    <option value="Europe" label="Europa"></option>
                    <option value="Oceania" label="Oceanía"></option>
                    <option value="Antarctic" label="Antártico"></option>
                </select>
            </div>
            <div>
                <select onChange={filterByActivities}>
                    <option key="-1" value="" label="Filter by activity"></option>
                    {activities.activities && activities.activities.map((activity, i) => (
                        <option key={i} value={activity.name} label={activity.name}></option>
                    ))}
                </select>
            </div>
        </div>
    )
}