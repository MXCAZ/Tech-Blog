const { User } = require("../models");

const userData = [
  {
    username: "francisco_sanchez",
    github: "MXCAZ",
    email: "final00717@hotmail.com",
    password: "password1",
  },
  {
    username: "benito_besos",
    github: "BENITO",
    email: "benitoBesos@gmail.com",
    password: "password2",
  },
  {
    username: "anilu_ortiz",
    github: "ANILU29",
    email: "any29@gmail.com",
    password: "password3",
  },
  {
    username: "victor_garcia",
    github: "SEXYVICKY",
    email: "sexyvicky@gmail.com",
    password: "password4",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
