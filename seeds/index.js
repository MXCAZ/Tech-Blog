const seedPosts = require("./post-seed");
const seedUsers = require("./user-seed");
const seedComments = require("./comment-seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedUsers();
  console.log("\n----- USERS SEEDED -----\n");
  await seedPosts();
  console.log("\n----- POSTS SEEDED -----\n");
  await seedComments();
  console.log("\n----- COMMENT SEEDED -----\n");

  process.exit(0);
};

seedAll();
