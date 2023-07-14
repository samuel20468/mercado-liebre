const { log } = require("console");
const express = require("express");
const path = require("path");
const dotenv = require("dotenv").config();

const app = express();

app.use(express.static('public'))

app.get("/", (req, res) => {
    const ruta = path.join(__dirname, "/views/home.html")
    res.sendFile(ruta)
})
app.get("/login", (req, res) => {
    const ruta = path.join(__dirname, "/views/login.html")
    res.sendFile(ruta)
})
app.get("/register", (req, res) => {
    const ruta = path.join(__dirname, "/views/register.html")
    res.sendFile(ruta)
})

app.listen(process.env.PORT, () => {
    console.log("INICIO SERVIDOR")
})