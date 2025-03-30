const express = require('express');

const {PORT} = require("./config/serverConfig")

const setAndStartServer = async()=>{
    const app = express();
    app.listen(PORT,()=>{
        console.log(`server started at ${PORT}`)
    })
}

setAndStartServer()