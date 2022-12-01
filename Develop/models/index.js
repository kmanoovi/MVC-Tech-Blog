const User = require ("./User");
const Post = require ("./Post");
const Comment = require ("./Comment");

Post.belongsTo(User,{
    ForeignKey: "userId",
    onDelete: "CASCADE"
});

Post.hasMany(Comment, {
    ForeignKey: "postId",
    onDelete: "CASCADE"
});

Comment.belongsTo(User, {
    ForeignKey: "userId",
    onDelete: "CASCADE"
});

module.exports = {User, Comment, Post}