module.exports = function (sequelize, DataTypes) {


  var Event = sequelize.define("Event", {
    host: {
      type: DataTypes.STRING
    },
    title: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING,
      validate: {
        is: ["^[a-z]+$", 'i']
      }
    },
    date: {
      type: DataTypes.DATE
    },
    description: {
      type: DataTypes.TEXT
    }
  });
  
  Event.associate = function (models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    Event.belongsToMany(models.User, {
      through: 'Attendees'
    });
  }

  return Event;
};