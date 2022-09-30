const express = require("express")
const app = express()
const SERVER_PORT = 8088

//http://localhost:8088/hello
app.get("/hello", (req, res) => {
    res.send("<h1>Hello Express JS</h1>")
})

//http://localhost:8088/user?fname=Pritesh&lname=Patel
app.get("/user", (req, res) => {
    const firstname = req.query.fname
    const lastname = req.query.lname
    res.send({
        firstname,
        lastname
    })
})

//http://localhost:8088/user/Pritesh/Patel
app.post("/user/:fname/:lname", (req, res) => {
    const firstname = req.params.fname
    const lastname = req.params.lname
    res.send({
        firstname,
        lastname
    })
})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})