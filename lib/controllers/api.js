var express = require('express');
var models = require('./models');

var User = models.User;
var Session = models.Session;
var Interview = models.Interview;

module.exports = function(app) {
    var router = express.Router();

    router.get('/', function(req, res){
        res.json({message: "we're in business baby"});
    });

    //All accessed at (http://localhost:8080/api/users
    router.route('/users')

        //Getting all of the Users
        .get(function(req, res){
            User.find(function(err, users){
                if (err) {
                    res.send(err);
                }
                res.json(users);
            })
        })

        //Adding a new User
        .post(function(req, res){
           var newUser = new User({
               firstName: req.body.firstName,
               lastName: req.body.lastName,
               username: req.body.username,
               password: req.body.pass,
               sessions: [],
               age:req.body.age,
               online: true
           });

           newUser.save(function(err){
              if (err) {
                  console.log(err);
                  res.send(err);
              } else {
                  console.log('done');
                  res.json({message: 'User Created!'});
              }
           });

        });

    router.route('/users/:user_id')

        //Gettins a specific User
        .get(function(req, res){
            Bear.findById(req.params.user_id, function(err, user){
                if (err) {
                    res.send(err);
                } else {
                    res.json(user);
                }
            })
        })

        //Updates a specific User
        .put(function(req, res){
            Bear.findById(req.params.user_id, function(err, user){
                if (err) {
                    res.send(err);
                } else {

                    user.firstName = req.body.firstName;
                    user.lastName = req.body.lastName;
                    user.username = req.body.username;
                    user.password = req.body.pass;
                    user.sessions =  req.body.sessions;
                    user.age = req.body.age;

                    user.save(function(err){
                        if (err) {
                            res.send(err);
                        }

                        res.json({message:'User Updated!'});
                    })


                }
            })
        });

    router.route('/sessions')

        //Creating a new Interview Session
        .post(function(req, res){
            var newSession = new Session({
                sessionName: req.body.sessionName,
                creator: req.body.creator,
                startDate: req.body.startDate,
                endDate: req.body.endDate
            });

            newSession.save(function(err){
                if (err){
                    res.send(err);
                }

                res.json('Session Created');
            })
        });

    router.route('/sessions/user/user:id')

        //Used for when you want to find all the sessions attributed to a particular User
        .get(function(req, res){
            Session.find({creator: req.body.user_id}, function(err, sessions){
                if (err) {
                    res.send(err);
                }

                res.json(sessions);
            })
        });

    router.route('/sessions/:session_id')

        //Getting a particular session
        .get(function(req, res){
            Session.findById(req.params.session_id, function(err, session){
                if (err) {
                    res.send(err);
                }

                res.json(session);
            });
        })

        .put(function(req, res){
            Session.findById(req.params.session_id, function(err, session){
                if (err) {
                    res.send(err);
                }


                if (req.body.sessionName){
                    session.name = req.body.sessionName;
                }

                if (req.body.mods){
                    session.mods = req.body.mods;
                }

                if (req.body.questions){
                    session.questions = req.body.questions;
                }

                if (req.body.applicants){
                    session.applicants = req.body.applicants;
                }

                if (req.body.interviewers){
                    session.name = req.body.interviewers;
                }

                if (req.body.startDate){
                    session.startDate = req.body.startDate;
                }

                if (req.body.endDate){
                    session.endDate = req.body.endDate;
                }

                if (req.body.interviews){
                    session.interviews = req.body.interviews;
                }

                session.save(function(err){
                    if (err){
                        res.send(err);
                    }

                    res.json({message:'Session Updated!'})
                })

            });
        });


    //All of our API's must be prefixed with /api
    app.use('/api', router);
}
