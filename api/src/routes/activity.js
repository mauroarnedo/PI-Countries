const { Router } = require('express');
const { addActivity, getActivities } = require('../controllers/activities');
const router = Router();

router.post('/', addActivity);
router.get('/', getActivities)

module.exports = router;