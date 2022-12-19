const {Sequelize, Model, DataTypes} = require("sequelize");
const sequelize = require("../config/connection");
class Profile extends Model {}

Profile.init(
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING,
    },
    {
        sequelize
    }
)

module.exports = Profile