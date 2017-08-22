// require express and the burgers model
var db = require('../models');
var Foster = db.Foster;


// export the routes
module.exports = function(app) {
    // get the root route
    app.get('/api/foster', function(req, res) {
        db.Foster.findAll({}).then(function (dbFoster) {
            var responseObject = {
                foster: dbFoster
            }
            res.json(responseObject);
    });
});
    
    app.get('/api/foster/:id', function(req, res) {
        db.Foster.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbFoster) {
            res.json(dbFoster);
        })
    });
    
    app.put("/api/foster/:id", function (req, res) {
        db.Foster.update({
            foster_available: req.body.dog_foster
        },
    {
        where: {
            id: req.params.id
        }
    }).then(function(dbFoster) {
        res.json(dbFoster);
    })

    });

    app.post("/api/foster", function (req, res) {
        db.Foster.create({
            foster_firstname: req.body.firstname,
            foster_photo: req.body.imageLink,
            foster_lastname: req.body.lastname,
            foster_email: req.body.email,
            foster_phone: req.body.phone,
            foster_hometype: req.body.hometype,
            foster_yardtype: req.body.yardtype,
            foster_kids: req.body.kids,
            foster_pets: req.body.pets,
            foster_pettype: req.body.pettype,
            foster_text: req.body.text
        }).then(function (dbFoster) {
            res.location('/api/foster/' + dbFoster.id);
            res.send(201);
        });

    });
};
    
    