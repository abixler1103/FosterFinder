module.exports = function (sequelize, DataTypes) {
    var Foster = sequelize.define("Foster", {
        foster_firstname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 140] }
        },
        foster_lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 140] }
        },
        
        foster_email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 140] }
        },
        foster_photo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        foster_phone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        foster_hometype: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 140] }
        },
        foster_yardtype: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 140] }
        },
        foster_kids: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 140] }
        },
        foster_pets: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 140] }
        },
        foster_pettype: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 140] }
        },
        foster_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 140] }
        }

    });
    return Foster;
};