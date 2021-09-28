const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('./country.js')
const activities = require('./activity.js')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countries);
router.use('/activities', activities);
// router.get('/', (req, res) => {
//     res.send('Ayudaaaa no me toma las rutaas :(')
// });


module.exports = router;
