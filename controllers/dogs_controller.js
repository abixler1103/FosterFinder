var db = require("../models");

module.exports = function (app) {
//not sure if this is working.. Having some issues with it
    app.get("/api/dogs", function (req, res) {
        db.Dogs.findAll({}).then(function (dbDogs) {
            var responseObject = {
                dogs: dbDogs
            }
            res.json(responseObject);
        })
    });

    app.get("/api/dogs/:id", function (req, res) {
       db.Dogs.findOne({
           where: {
               id: req.params.id
           }
       }).then(function(dbDogs) {
           res.json(dbDogs);
       })
    });

    app.put("/api/dogs/:id", function (req, res) {
        db.Dogs.update({
            dog_available: req.body.dog_available
        },
    {
        where: {
            id: req.params.id
        }
    }).then(function(dbDogs) {
        res.json(dbDogs);
    })

    });

    app.post("/api/dogs", function (req, res) {
        console.log(req.body);
        db.Dogs.create({
            dog_name: req.body.name,
            dog_photo: req.body.photo,
            dog_description: req.body.description,
            dog_location: req.body.location,
            dog_age: req.body.age,
            dog_breed: req.body.breed,
            dog_gender: req.body.gender,
            dog_available: true
        }).then(function (dbDogs) {
            res.location('/api/dogs/' + dbDogs.id);
            res.send(201);
        });

    });
};