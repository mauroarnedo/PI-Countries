const { Router } = require('express');
const { getCountries, getCountriesById } = require('../controllers/countries');
const router = Router();

router.get('/', getCountries);
router.get('/:id', getCountriesById);

module.exports = router;