import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries, setName, setPage } from "../../Redux/actions";

export default function Search() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        e.preventDefault()
        setInput(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(setName(input)) //guardo el name en store
        dispatch(getCountries({ page: 1, name: input }))
        dispatch(setPage(1))
        setInput("")
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Search(Ex: Argentina, Uruguay..)" onChange={handleInputChange} value={input} />
            <button type="submit">🔍</button>
        </form>
    )

}