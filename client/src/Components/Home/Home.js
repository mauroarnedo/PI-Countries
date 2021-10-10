import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getActivities, getCountries, setPage } from "../../Redux/actions/index.js";
import CountryCard from "../CountriesCards/Cards.js";

export default function Home() {
    const dispatch = useDispatch();
    const { countries, name, orderP, filterC, page } = useSelector(state => state);

    useEffect(() => {
        dispatch(getCountries({}))
        dispatch(getActivities({}))
    }, [dispatch])

    const changePage = (page) => {
        dispatch(getCountries({ page, orderP, filterC, name }))
        dispatch(setPage(page))
    }

    return (
        <div>
            <h1>Hello World!</h1>
            {
                countries?.result?.length > 0 && countries.result.map((c) => {
                    return <CountryCard flag={c.flag} name={c.name} continent={c.continent} population={c.population} id={c.id} key={c.id} />
                })
            }
            <button disabled={page - 1 === 0} onClick={() => { changePage(page - 1) }}>prev</button>
                <label>{page}</label>
            <button disabled={countries?.count <= (page * 10)} onClick={() => { changePage(page + 1) }}>next</button>
        </div>
    )
}