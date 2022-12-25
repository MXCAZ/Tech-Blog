const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 3,
    comment_text: "This is amazing!",
  },
  {
    user_id: 4,
    post_id: 3,
    comment_text: "WOW amazing work!",
  },
  {
    user_id: 1,
    post_id: 4,
    comment_text: "Awesome! kudos to everyone who have contributed",
  },
  {
    user_id: 3,
    post_id: 2,
    comment_text: "This is great",
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
