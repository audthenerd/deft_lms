var sha256 = require('js-sha256');

module.exports = (db) => {

  /**
   * ===========================================
   * Controller logic
   * ===========================================
   */

   const SALT = "not all those who wander are lost";

   // const getRoot = (request, response)  => {
   //      response.render('user/home');
   // };

   const redirectHome = (request, response) => {

        let cookieName = request.cookies['username'];

        response.redirect('/home/' + cookieName);
   };


   const userProfile = (request, response) => {
    let cookieName = request.cookies['username'];
    let cookieLevel = request.cookies['level'];
    let cookieId = request.cookies['id'];

        db.user.userProfile(request.params.name, (error, queryResult) => {

            if(error) {

                console.error('userhome not loading:', error);
                response.sendStatus(500);
            };
            response.render('user/profilepage', {user: queryResult.rows[0], name: cookieName, level: cookieLevel, id: cookieId } );
        });
   };

    const updateProfile = (request, response) => {

        let cookieName = request.cookies['username'];
        let cookieLevel = request.cookies['level'];
        let cookieId = request.cookies['id'];


        db.user.updateProfile(request.query.id, (error, queryResult) => {

            if(error) {

                console.error('userhome not loading:', error);
                response.sendStatus(500);
            };

            response.render('user/updateprof', {user: queryResult.rows[0], name: cookieName, level: cookieLevel, id: cookieId } );
        });
    };


    const newForm = (request, response) => {

        let cookieName = request.cookies['username'];
        let cookieLevel = request.cookies['level'];
        let cookieId = request.cookies['id'];

        if(cookieName !== undefined) {
          response.redirect('/home/'+cookieName);
        } else {
        response.render('user/newuser');
        };
    };

    const create = (request, response) => {
      // use user model method `create` to create new user entry in db

      // console.log(request.body);
      db.user.create(request.body, (error, queryResult
) => {


        // queryResult of creation is not useful to us, so we ignore it
        // (console log it to see for yourself)
        // (you can choose to omit it completely from the function parameters)

        console.log('create QR:',queryResult);

        if (error) {

          console.error('error getting user:', error);

          // if (error.code === 23505) {
          //   response.redirect('/users/new');
          // } else {
          response.sendStatus(500);
        // }
      };

        if (queryResult.rowCount >= 1) {
          console.log('User created successfully');

          // drop cookies to indicate user's logged in status and username

          let currentSessionCookie = sha256(request.body.name + 'logged_id' + SALT);

          response.cookie('logged_in', currentSessionCookie);
          response.cookie('username', request.body.username);
          response.cookie('level', request.body.level);

        } else {

          console.log('User could not be created');

        }

        // redirect to home page after creation
        response.redirect('/home/'+request.body.username);

      });
  };


    const userHome = (request, response) => {

        console.log("cookies userhome", request.cookies['username']);

        let cookieName = request.cookies['username'];
        let cookieLevel = request.cookies['level'];
        let cookieId = request.cookies['id'];

        console.log('cookielevel userhome', cookieLevel);

        db.user.userHome(request.params.name, (error, queryResult) => {

            // console.log("userhome-ctrl QR.rows", queryResult.rows);

            if(error) {

                console.error('userhome not loading:', error);

                response.sendStatus(500);
            };

            if (cookieLevel <2) {
                response.render('admin/adminhome', {users: queryResult.rows, name: cookieName, id: cookieId} );
            } else {
                response.render('user/userhome', {name: cookieName});
            };

        });
    };


    const wrongPw = (request, response) => {

        db.user.wrongPw(request.body, (error, queryResult) => {

        if (error) {
          console.error('error getting user:', error);
          response.sendStatus(500);
        };
            console.log("get samples QR", queryResult);

            response.json(queryResult.rows);
    });
    };


    const loginForm = (request, response) => {

        let cookieName = request.cookies['username'];
        let cookieLevel = request.cookies['level'];
        let cookieId = request.cookies['id'];

        if(cookieName !== undefined) {
          response.redirect('/home/'+cookieName);
        } else {
            response.render('user/loginpage');
        };

        };

    const existing = (request, response) => {

        db.user.existing(request.body, (error, queryResult) => {


            // console.log("existing-control QR", queryResult);
            console.log("exist-ctrl reqbody", request.body);

            if (error) {
                console.error('error getting user:', error);
                response.sendStatus(500);

            };

            var enteredValue = sha256(request.body.password);
            console.log("user entered pw:", enteredValue);

            if(queryResult.rowCount < 1) {
              response.clearCookie('logged-in');
              response.clearCookie('username');
              response.clearCookie('level');
              response.clearCookie('id');
              response.redirect('/users/new');

            } else if (enteredValue === queryResult.rows[0].password ) {
                  response.clearCookie('logged-in');

                let currentSessionCookie = sha256(request.body.name + 'logged_id' + SALT);
                response.cookie('logged_in', currentSessionCookie);
                response.cookie('username', request.body.username);
                response.cookie('level', queryResult.rows[0].level);
                response.cookie('id', queryResult.rows[0].id);
                response.redirect ('/home/'+ queryResult.rows[0].username);

            } else {
              response.redirect('/login');
            };
        })
    };


    const samplesPage = (request,response) => {

      // console.log("cookie logged_in", request.cookies['username']);

      let cookieName = request.cookies['username'];
        let cookieId = request.cookies['id'];
        let cookieLevel = request.cookies['level'];

      db.user.samplesPage(request.body, (error, queryResult) => {

        if (error) {
          console.error('error getting user:', error);
          };

          console.log("samplespage", queryResult);

          if(cookieName === undefined) {
            response.redirect('/login')
          } else {
          response.render('samples/samplespage', {samples: queryResult.rows, name: cookieName, id: cookieId, level: cookieLevel});
        };
        });


    };



    const addSamples = (request, response) => {


      console.log(request.body);

      db.user.addSamples(request.body, (error, queryResult) => {


        // console.log("add samples", queryResult);

        if (error) {
          console.error('error getting user:', error);
          response.sendStatus(500);
        };

        let cookieName = request.cookies['username'];

            response.redirect('/lab/samples');
      });
    };


    const getSamples = (request, response) => {

      db.user.getSamples(request.body, (error, queryResult) => {

        if (error) {
          console.error('error getting user:', error);
          response.sendStatus(500);
        };
            console.log("get samples QR", queryResult);

            response.json(queryResult.rows);
    });
};


    // const deleteSample = (request, response) => {

    //     db.user.getSamples(request.body, (error, queryResult) => {

    //     if (error) {
    //       console.error('error getting user:', error);
    //       response.sendStatus(500);
    //     };
    //         // console.log("get samples QR", queryResult);

    //         response.render('samples/samplesedit');
    // });

    // }


    const logOut = (request,response) => {

      response.clearCookie('logged_in');
      response.clearCookie('username');
      response.clearCookie('level');
      response.clearCookie('id');
      setTimeout(response.redirect('/'), 3000);
    };


    const equipmentForm = (request, response) => {

        db.user.equipmentForm(request.body, (error, queryResult) => {

        let cookieName = request.cookies['username'];
        let cookieId = request.cookies['id'];
        let cookieLevel = request.cookies['level'];

        console.log("cookie name", cookieName);

        if (error) {
          console.error('error getting user:', error);
          };

        if(cookieName === undefined) {
            response.redirect('/login');
        } else {
        response.render('equipment/equipform', {equipment: queryResult.rows, name: cookieName, id: cookieId, level: cookieLevel});
        };

        });
    };



    const addEquipment = (request, response) => {

         db.user.addEquipment(request.body, (error, queryResult) => {

        // console.log("add samples", queryResult);

        if (error) {
          console.error('error getting user:', error);

          response.sendStatus(500);
        };

        let cookieName = request.cookies['username'];

            response.redirect('/lab/equipment');
      });

    };

    const delEquipment = (request, response) => {

        console.log("delEq RB", request.body);


        db.user.delEquipment(request.body, (error, queryResult) => {

            if (error) {
              console.error('error getting user:', error);

              response.sendStatus(500);
            };

            response.redirect("/lab/equipment");
        });
    }

    const editEquipPage = (request, response) => {

        let reqId = request.query;
        let cookieName = request.cookies['username'];
        let cookieId = request.cookies['id'];
        let cookieLevel = request.cookies['level'];

        console.log("edit Equip:", request.query);
        db.user.editEquipPage(request.query, (error, queryResult) => {

            console.log(queryResult);


            if (error) {
              console.error('error getting user:', error);

              response.sendStatus(500);
            };
            response.render('equipment/equipedit', {equipment: queryResult.rows[0], name: cookieName, id: cookieId, level: cookieLevel});
        })
    };



    const updateEquip = (request, response) => {


        db.user.updateEquip(request.body, (error, queryResult) => {

            console.log("updateEquip", request.body);

            if (error) {
                console.error('error getting user:', error);

                response.sendStatus(500);
            };

            response.redirect('/lab/equipment');
        })
    };

     const delSample = (request, response) => {

        console.log("delSample RB", request.body);


        db.user.delSample(request.body, (error, queryResult) => {

            if (error) {
              console.error('error getting user:', error);

              response.sendStatus(500);
            };

            response.redirect("/lab/samples");
        });
    }


    const assignSamples = (request, response) => {

        db.user.assignSamples(request.body, (error, queryResult) => {

             if (error) {
                console.error('error getting user:', error);

                response.sendStatus(500);
            };

            console.log("assignSamples", queryResult);
            response.render('admin/adminrender', queryResult.rows);

        });
    };



    const testsPage = (request, response) => {


        db.user.testsPage(request.body, (error, queryResult) => {

            if(error) {
                console.error('error getting user:', error);
                response.sendStatus(500);

            };

                response.render('methods', {tests: queryResult.rows});
        })
    };


  /**
   * ===========================================
   * Export controller functions as a module
   * ===========================================
   */
  return {
    newForm,
    userProfile,
    updateProfile,
    create,
    userHome,
    loginForm,
    existing,
    samplesPage,
    addSamples,
    getSamples,
    wrongPw,
    equipmentForm,
    addEquipment,
    redirectHome,
    delEquipment,
    editEquipPage,
    updateEquip,
    addSamples,
    assignSamples,
    delSample,
    testsPage,
    logOut
  };
};

