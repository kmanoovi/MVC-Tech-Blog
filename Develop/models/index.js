const User = require ("./User");
const Post = require ("./Post");
const Comment = require ("./Comment");
const Profile = require ("./Profile");

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

Profile.belongsTo(User, {
    ForeignKey: "userId",
    onDelete: "CASCADE"
});

module.exports = {User, Comment, Post, Profile}