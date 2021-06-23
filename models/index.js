// Exports are required here in order for the table to get created
const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

User.hasMany(Post);

Post.belongsTo(User, {
    foreignKey: 'author_id'
})

User.hasMany(Comment);
Post.hasMany(Comment);
Comment.belongsTo(Post);
Comment.belongsTo(User);

module.exports = { User, Post, Comment };
