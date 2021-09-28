const { Country, Activity, Op } = require('../db');
const axios = require('axios');

async function apiCountries() {
    try {
        let result = await axios.get('https://restcountries.com/v2/all');

        let countries = result.data.map((country) => {
            return {
                id: country.alpha3Code,
                name: country.name,
                flag: country.flags[0],
                continent: country.continent,
                capital: country.capital || "not defined",
                subregion: country.region,
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
        let { name, order, page } = req.query;

        let countries = []
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

        //#region ORDER
        if (order === 'asc' || !order || order === '') {
            countries = countries.sort((a, b) => {
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            })
        } else {
            countries = countries.sort((a, b) => {
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            })
        }
        if (order === 'asc' || !order || order === '') {
            countries = countries.sort((a, b) => {
                return a.population > b.population ? 1 : a.population < b.population ? -1 : 0
            })
        } else {
            countries = countries.sort((a, b) => {
                return b.population > a.population ? 1 : b.population < a.population ? -1 : 0
            })
        }
        //#endregion

        //#region PAGE
        let result = countries.slice((countriesXPage * (page - 1)), (countriesXPage * (page - 1) + countriesXPage))
        //#endregion

        return res.send({
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
        const { id } = req.params.id;
        let countryId = id.toUpperCase();
        let country = await Country.findByPk(countryId, { include: Activity })
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