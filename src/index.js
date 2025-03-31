const express = require('express');
const bodyParser = require('body-parser');
const appRoutes  = require('./routes/index')

const {PORT} = require("./config/serverConfig")

const setAndStartServer = async()=>{
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}))

    // routes
    app.use("/api",appRoutes)

    app.listen(PORT,async()=>{
        console.log(`server started at ${PORT}`)
    })
}

setAndStartServer()