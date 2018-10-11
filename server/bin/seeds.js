require('dotenv').load()
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Game = require("../models/Game");
const Chapter = require("../models/Chapter");
const bcryptSalt = 10;

mongoose
  .connect(process.env.DBURL, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [
  {
    name: "Cesar",
    email: String,
    username: "cesar",
    password: bcrypt.hashSync("12345", bcrypt.genSaltSync(bcryptSalt)),
    role: 'ADMIN'
  }
]

let games = [
  {
    title: "JUEGO DE PRUEBA",
    author: "CESAR ARMADA",
    description: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
    chapters: []
  
  }
]
let chapters = [
  {
    title: "CAPITULO DE INICIO",
    text: "CAPITULO DE INICIO",
    prevOption: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
    options: [],
    type:"starting"
  
  },
  {
    title: "JUEGO DE PRUEBA",
    text: "CESAR ARMADA",
    prevOption: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
    options: [],
    type:"midPoint"
  
  },
  {
    title: "JUEGO DE PRUEBA",
    text: "CESAR ARMADA",
    prevOption: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
    options: [],
    type:"midPoint"
  
  },
  {
    title: "JUEGO DE PRUEBA",
    text: "CESAR ARMADA",
    prevOption: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
    options: [],
    type:"midPoint"
  
  },
  {
    title: "JUEGO DE PRUEBA",
    text: "CESAR ARMADA",
    prevOption: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
    options: [],
    type:"midPoint"
  
  },
  {
    title: "JUEGO DE PRUEBA",
    text: "CESAR ARMADA",
    prevOption: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
    options: [],
    type:"midPoint"
  
  },
  {
    title: "JUEGO DE PRUEBA",
    text: "CESAR ARMADA",
    prevOption: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
    options: [],
    type:"midPoint"
  
  },
  {
    title: "JUEGO DE PRUEBA",
    text: "CESAR ARMADA",
    prevOption: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
    options: [],
    type:"midPoint"
  
  },
  {
    title: "JUEGO DE PRUEBA",
    text: "CESAR ARMADA",
    prevOption: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
    options: [],
    type:"midPoint"
  
  },
  {
    title: "JUEGO DE PRUEBA",
    text: "CESAR ARMADA",
    prevOption: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
    options: [],
    type:"midPoint"
  
  },
  {
    title: "JUEGO DE PRUEBA",
    text: "CESAR ARMADA",
    prevOption: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
    options: [],
    type:"goodEnding"
  
  },
  {
    title: "JUEGO DE PRUEBA",
    text: "CESAR ARMADA",
    prevOption: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
    options: [],
    type:"badEnding"
  
  },
  {
    title: "JUEGO DE PRUEBA",
    text: "CESAR ARMADA",
    prevOption: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
    options: [],
    type:"badEnding"
  
  }
]

User.deleteMany()
.then(() => {
  return User.create(users)
})
.then(usersCreated => {
  console.log(`${usersCreated.length} users created with the following id:`);
  console.log(usersCreated.map(u => u._id));
})
.then(() => {
  // Close properly the connection to Mongoose
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})