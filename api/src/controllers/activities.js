const { Activity, Country, Op } = require('../db');
const { v4: uuidv4 } = require('uuid');

async function addActivity(req, res, next) {
    const { name, dificult, duration, season, countries } = req.body;
    if (!name || !dificult || !season || !duration) {
        res.status(404).send('Debes ingresar todas las propiedades');
    }
    try {
        const newActivity = await Activity.create({
            name,
            dificult,
            duration,
            season,
            id: uuidv4()
        });
        if (countries) {
            const countriesDb = await Country.findAll({
                where: { name: countries }
            })
            newActivity.addCountries(countriesDb)
        }
        res.send(newActivity);
    } catch (error) {
        console.log(error)
        next(error)
    }
}

async function getActivities(req, res, next) {
    try {
        let { name } = req.query;
        let activities = []
        if (name && name !== "") {
            activities = await Activity.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: Country
            })
        } else {
            activities = await Activity.findAll({ include: Country })
        }
        return res.send('Actividades encontradas')
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = { addActivity, getActivities }
