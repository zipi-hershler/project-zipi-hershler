const router = require("express").Router()
const user = require('../controllers/user')
router.post('/registration',user.registration)
router.get('/getusers',user.getusers)
module.exports = router