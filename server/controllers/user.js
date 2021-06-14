const User = require("../model/user")
const jwt = require("jsonwebtoken")
const registration = async (req, res) => {
    let new_user = new User(req.body)
    try {
        await new_user.save()
        // const token = jwt.sign({ id: new_user.id }, process.env.SECRET)
        // res.send(token)
         res.status(200).json({user:new_user})
    }
    catch (err) {
        console.log("err registration " + err)
    }
}


const getusers = (req, res) => {
    User.find()
    .then((users) => {
        res.json({ user: users })
    })
    .catch((err) => {
        res.send(err)
    })
}

module.exports = {  registration, getusers }








