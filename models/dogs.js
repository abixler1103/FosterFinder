module.exports = function (sequelize, DataTypes) {
    var Dogs = sequelize.define("Dogs", {
        dog_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 140] }
        },
        dog_location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 140] }
        },
        dog_photo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dog_description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dog_age: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        dog_breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dog_gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dog_available: {
            type: DataTypes.BOOLEAN,
            allownull: false,
            defaultValue: true
        }
    });
    return Dogs;
};