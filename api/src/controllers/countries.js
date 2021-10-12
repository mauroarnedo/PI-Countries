const { Country, Activity, Op } = require('../db');
const axios = require('axios');

async function apiCountries() {
    try {
        let result = await axios.get('https://restcountries.com/v3.1/all');

        let countries = result.data.map((country) => {
            return {
                id: country.cca3,
                name: country.name.common,
                flag: country.flags.png || "not defined",
                continent: country.region || "not defined",
                capital: country.capital && country.capital[0] || "not defined",
                subregion: country.subregion || "not defined",
                area: country.area || 0,
                population: country.population || 0
            }
        })
        countries = await Promise.all(countries.map(c => Country.findOrCreate({ where: c })))

        return "Paises Cargados"

    } catch (error) {
        console.log(error);
        return "No se pudo cargar los paises"
    }
};

async function getCountries(req, res, next) {
    try {
        let { name, orderA, orderP, filterA, page } = req.query;

        let countries = []
        let result
        page = page ? page : 1
        const countriesXPage = 10
        //#region NAME
        if (name && name !== "") {
            countries = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: Activity
            })
        } else {
            countries = await Country.findAll({ include: Activity })
        }
        //#endregion

        //#region ORDER BY NAME
        if (orderA === 'Asc') {
            countries = countries.sort((a, b) => {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            })
        }
        if (orderA === 'Desc') {
            countries = countries.sort((a, b) => {
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            })
        }
        //#endregion

        //#region ORDER BY POPULATION
        if (orderP === 'higher') {
            countries = countries.sort((a, b) => {
                return a.population > b.population ? 1 : a.population < b.population ? -1 : 0
            })
        }
        if (orderP === 'lower') {
            countries = countries.sort((a, b) => {
                return b.population > a.population ? 1 : b.population < a.population ? -1 : 0
            })
        }
        //#endregion

        //#region FILTER BY CONTINENT
        if (filterA && filterA !== '') {
            countries = countries.filter((country) => { return country.activities.filter((activity) => { return activity.name === filterA }).length })
        }
        //#endregion

        //#region PAGE
        if (page > 1) {
            result = countries.slice((countriesXPage * (page - 1) - 1), (countriesXPage * (page - 1) + (countriesXPage - 1)))
        } else {
            result = countries.slice(0, (countriesXPage - 1))
        }
        //#endregion

        return res.send({
            all: countries,
            result: result,
            count: countries.length
        })

    } catch (error) {
        console.log(error)
        next(error);
    }
}

async function getCountriesById(req, res, next) {
    try {
        const id = req.params.id;
        let country = await Country.findByPk(id, { include: Activity })
        return res.send(country)
    } catch (error) {
        console.log(error)
        next(error);
    }
}

module.exports = {
    apiCountries,
    getCountries,
    getCountriesById
}