const express = require("express")
const http = require('http');
const server = http.createServer(express);
const parser = require("body-parser")
const {notesController} = require("./controllers/notesController.js");

let app = express()

app.use(parser.urlencoded({extended:true}))
app.use(parser.json())


app.get(
  "/",
  notesController
)

app.get(
  "/list",
  notesController
)


app.post(
  "/create",
  notesController
)

app.put(
  "/update",
  notesController
)

app.delete(
  "/delete/:id",
  notesController
)


app.listen(
  7070,
  ()=>{
    console.log("iniciado el servidor")
  }
)
