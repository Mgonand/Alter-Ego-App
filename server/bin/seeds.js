require('dotenv').load()
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const Game = require("../models/Game");
const Chapter = require("../models/Chapter");
const bcryptSalt = 10;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
  })
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let users = [{
  name: "Cesar",
  email: String,
  username: "cesar",
  password: bcrypt.hashSync("12345", bcrypt.genSaltSync(bcryptSalt)),
  role: 'ADMIN'
}]

let games = [{
  title: "JUEGO DE PRUEBA",
  author: "CESAR ARMADA",
  description: "ESTE ES EL JUEGO DE PRUEBA NÚMERO 1",
  chapters: []

}]
let chapters = [{
    title: "CAPITULO DE INICIO",
    text: "TEXTO DE CAPITULO DE INICIO",
    ref: 1,
    originRef: 0,
    options: [],
    type: "starting"

  },
  {
    title: "OPCION 2",
    text: "TEXTO DE CAPITULO 2 ",
    ref: 2,
    originRef: 1,
    options: [],
    type: "midPoint"

  },
  {
    title: "OPCION 3",
    text: "TEXTO DE CAPITULO 3",
    ref: 3,
    originRef: 1,
    options: [],
    type: "midPoint"

  },
  {
    title: "OPCION 4",
    text: "TEXTO DE CAPITULO 4",
    ref: 4,
    originRef: 2,
    options: [],
    type: "midPoint"

  },
  {
    title: "OPCION 5",
    text: "TEXTO DE CAPITULO 5",
    ref: 5,
    originRef: 2,
    options: [],
    type: "midPoint"

  },
  {
    title: "OPCION 6",
    text: "TEXTO DE CAPITULO 6",
    ref: 6,
    originRef: 3,
    options: [],
    type: "midPoint"

  },
  {
    title: "OPCION 7",
    text: "FINAL MALO 7",
    ref: 7,
    originRef: 3,
    options: [],
    type: "badEnding"

  },
  {
    title: "OPCION 8",
    text: "FINAL MALO 8",
    ref: 8,
    originRef: 4,
    options: [],
    type: "badEnding"

  },
  {
    title: "OPCION 9",
    text: "FINAL BUENO 9",
    ref: 9,
    originRef: 4,
    options: [],
    type: "goodEnding"

  },
  {
    title: "OPCION 10",
    text: "FINAL MALO 10",
    ref: 10,
    originRef: 5,
    options: [],
    type: "badEnding"

  },
  {
    title: "OPCION 11",
    text: "FINAL BUENO 11",
    ref: 11,
    originRef: 5,
    options: [],
    type: "goodEnding"

  },
  {
    title: "OPCION 12",
    text: "FINAL MALO 12",
    ref: 12,
    originRef: 6,
    options: [],
    type: "badEnding"

  },
  {
    title: "OPCION 13",
    text: "TEXTO DE LA OPCION 13",
    ref: 13,
    originRef: 6,
    options: [],
    type: "midPoint"

  },
  {
    title: "OPCION 14",
    text: "FINAL MALO 14",
    ref: 14,
    originRef: 13,
    options: [],
    type: "badEnding"

  },
  {
    title: "OPCION 15",
    text: "FINAL SUPER BUENO 13",
    ref: 15,
    originRef: 13,
    options: [],
    type: "goodEnding"

  }
]
let gamesSave = [];
let usersSave = [];
User.deleteMany()
  .then(() => {
    return User.create(users)
  })
  .then(usersCreated => {
    usersSave = usersCreated;
    console.log(usersSave);
    console.log(`${usersCreated.length} users created with the following id:`);
    console.log(usersCreated.map(u => u._id));
  })
  .then(() => {
    return Game.deleteMany()
  })
  .then(() => {
    return Game.create(games)
  })
  .then(gamesCreated => {
    gamesSave = gamesCreated;
    console.log(`${gamesCreated.length} Games created with the following id:`);
    console.log(gamesCreated.map(u => u._id));
  })
  .then(() => {
    return Chapter.deleteMany()
  })
  .then(() => {
    return Chapter.create(chapters)
  })
  .then(chaptersCreated => {
    const cId = chaptersCreated.map(u => u._id);
    return Promise.all([
      gamesSave.forEach(game => {
        Promise.all([
          cId.forEach(c => {
            game.update({
              $push: {
                chapters: c
              }
            }).exec()
          })
        ])
      })
    ])
  })
  .then(() => {
    return Game.find()
      .populate("chapters")
      .then(games => {
        return Promise.all(
          games.map(game => {
            return Promise.all(
              game.chapters.map(c => {
                const update = game.chapters.filter(e => c.ref == e.originRef);
                return c.update({
                    options: update
                }).then()
              })
            )
          })
        )
      })
    // Close properly the connection to Mongoose
  })
  .then(() => {
    console.log("Terminado")
    mongoose.disconnect()
  })
  .catch(err => {
    mongoose.disconnect()
    throw err
  })