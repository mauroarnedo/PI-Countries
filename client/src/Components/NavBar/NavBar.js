import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search.js";
import OrdersFilters from "../OrdersFilters/OrdersFilters.js";
import { useDispatch } from "react-redux";
import { getCountries } from "../../Redux/actions/index.js";

export default function NavBar() {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getCountries({}))
    }, [dispatch])
    
    return (
        <div>
            <NavLink to="/home">Home</NavLink>
            <OrdersFilters/>
            <Search/>
            <NavLink to="/createActivity">Create an activity!</NavLink>
        </div>
    )
}