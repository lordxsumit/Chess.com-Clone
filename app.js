const express = require('express')
const path = require("path")
const socket = require('socket.io')
const http = require('http')
const {Chess} = require('chess.js')
const { title } = require('process')

const app = express()
const server = http.createServer(app)

const io = socket(server)

const chess = new Chess()
let players = {}
let currentPlayer = "W"

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))

app.get("/", (req, res) => {
    res.render("index", {title: "Chess Game"})
})

io.on("connection", function(uniqueScoket){
    console.log("Connected");

    uniqueScoket.on("churan", function(){
        // console.log("churan received");
        io.emit("churan paapdi")
    })
})

server.listen(3000, function(){
    console.log("listening on port 3000");
})