export async function countriesOrderFilter(orderTarget, criteria) {

    let newCountries
    if (criteria.name === 'Asc')
        newCountries = orderTarget.sort((a, b) => (
            a.name > b.name ? 1 : a.name < b.name ? -1 : 0),
        )

    if (criteria.name === 'Desc')
        newCountries = orderTarget.sort((a, b) => (
            a.name < b.name ? 1 : a.name > b.name ? -1 : 0),
        )
    
    if (criteria.continent){
        newCountries = orderTarget.filter((countries) => 
            countries.continent.includes(criteria.continent)
        )
        }
    return newCountries;
}