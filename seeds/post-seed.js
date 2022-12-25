const { Post } = require("../models");

const postData = [
  {
    title: "The Ultimate tech quiz",
    post_content:
      "A web app that will give users 10 new technical questions each day and track their progress in things like programing, cybersecurity, database architecture, and more!",
    user_id: 1,
  },
  {
    title: "Roll EM Up",
    post_content:
      "a game for Windows and MacOs where players move a ball through a series of increasingly challenging mazes.",
    user_id: 3,
  },
  {
    title: "Music Near Me",
    post_content:
      " A mobile app that will send you notifications whenever a concert is playing in your area.",
    user_id: 4,
  },
  {
    title: "weeding",
    post_content: " Just for fun and a weeding",
    user_id: 2,
  },
];

const postSeed = () => Post.bulkCreate(postData);

module.exports = postSeed;
