const express = require("express")
const app = express()
const bodyparser = require("body-parser")
app.use(bodyparser.json())
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors=require('cors')
dotenv.config()
app.use(cors())
const router = require('./router/api')
const { use } = require("./router/api")

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin", "x-Requested-With", "Content-Type", "Accept", "Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({})
    }
    next();
})


const conectionprams = {

    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}



mongoose.connect(process.env.MONGO, conectionprams)
    .then(() => {
        console.log("connected")
    })
    .catch((err) => {
        console.log("error  " + err)
    })


// app.use('/', function (req, res, next) {
//     if (!req.path.startsWith('/login') && req.path !== ('/registration') && req.path !== ('/registrationAdmin ') && !req.path.startsWith('/loginAdmin')) {
//         try {
//             jwt.verify(req.headers['authorization'], process.env.SECRET)
//             console.log("success verify ")
//             next()
//         }
//         catch (err) {
//             res.send("err verify" + err)

//         }
//     }
//     else {
//         next()
//     }
// })

app.use('/', router)

app.listen(process.env.SERVER, () => { console.log("listen") })