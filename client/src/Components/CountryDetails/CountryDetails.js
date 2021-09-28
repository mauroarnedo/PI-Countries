import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getCountryDetails } from "../../Redux/actions/index.js"

export default function CountryDetails(props) {
    const { id } = props.match.params
    const { country } = useSelector(state => state)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(getCountryDetails(id))
        
    }, [dispatch, id])

    function goBack () {
        history.goBack()
    }

    return (
        <div>
            <button onClick={goBack}>Go back</button>
            {
                country?.name?
                <React.Fragment>
                    <img src={country.flag}/>
                    <p>{character.name}</p>
                </React.Fragment>
                :
                <div>Loading...</div>
            }
        </div>
    )
}