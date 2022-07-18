const express = require('express')
const router = express.Router()
const controller = require('../controls/goalsController')

router.get('/',controller.getGoal)
router.post('/',controller.createGoal)
router.get('/:id',controller.getAGoal)
router.put('/:id',controller.updateGoal)
router.delete('/:id',controller.deleteGoal)

module.exports = router