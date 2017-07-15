var bcrypt = require('bcrypt'); 

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING, 
        email: DataTypes.STRING,
        hash: DataTypes.STRING
    });
    User.generateHash = function (password) {
        console.log(password);
        return bcrypt.hash(password, 10);
    }
    User.validPassword = function (password, hash) {
        console.log(password, hash);
        return bcrypt.compare(password, hash);
    }


       User.associate = function (models) {
        // Using additional options like CASCADE etc for demonstration
        // Can also simply do Task.belongsTo(models.User);
        User.belongsToMany(models.Event, {
          through: 'Attendees'
        });
      }
    return User;
}