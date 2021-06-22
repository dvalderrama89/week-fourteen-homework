// Exports are required here in order for the table to get created
const User = require('./User');
const Post = require('./Post');

User.hasMany(Post);

Post.belongsTo(User, {
    foreignKey: 'author_id'
})

module.exports = { User, Post };
