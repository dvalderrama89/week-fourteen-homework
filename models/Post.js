const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection');

class Post extends Model {}

Post.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        post_body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Users',
                key: 'id'
            }
        },
        created_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        },
        updated_at: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
        }
    }, 
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts',
    }
)

module.exports = Post;