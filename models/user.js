var sha256 = require('js-sha256');


/**
 * ===========================================
 * Export model functions as a module
 * ===========================================
 */
module.exports = (dbPoolInstance) => {


    const userProfile = (user, callback) => {

        console.log("profile user", user);

        const queryString = `SELECT * FROM users WHERE username='${user}' `;

        dbPoolInstance.query(queryString, (error, queryResult) => {
        // invoke callback function with results after query has executed
        console.log("create models QR", queryResult);

        callback(error, queryResult);
      });

    };


    const updateProfile = (user, callback) => {

        console.log("updateprofile user", user);

        const queryString = `SELECT * FROM users WHERE id='${user}' `;

        dbPoolInstance.query(queryString, (error, queryResult) => {
        // invoke callback function with results after query has executed
        console.log("updateprof QR", queryResult);

        callback(error, queryResult);
      });

    };


    const create = (user, callback) => {
      // run user input password through bcrypt to obtain hashed password
      // console.log("user password at create:", user.username);

      var hashedValue = sha256(user.password);

      // set up query
      const queryString = `INSERT INTO users (name, username, level, password) VALUES ($1, $2, $3, $4)`;

      const values = [
        user.name,
        user.username,
        user.level,
        hashedValue
      ];


      console.log(queryString);
      // execute query
      dbPoolInstance.query(queryString, values, (error, queryResult) => {
        // invoke callback function with results after query has executed
        console.log("create models QR", queryResult);

        callback(error, queryResult);
      });
    };


    const userHome = (user, callback) => {

        // console.log("user log at userHome:", user);

        const queryString = 'SELECT * FROM users';
        const queryStringOne = 'SELECT * FROM samples';

        dbPoolInstance.query(queryString, (error, queryResult) => {
        // invoke callback function with results after query has executed
         console.log("userHome-model QR:", queryResult);

        callback(error, queryResult);

      });
    };


    const wrongPw = (user, callback) => {

        const queryString = 'SELECT * FROM users';

        dbPoolInstance.query(queryString, (error, queryResult) => {
        // invoke callback function with results after query has executed

         console.log("wrongpw model QR:", queryResult);

        callback(error, queryResult);

      });

    };


    const existing = (user, callback) => {

        // console.log("username at login:", user);

         var hashedValue = sha256(user.password);

        let queryString = "SELECT * FROM users WHERE username ='"+ user.username +"'";

            console.log(queryString);


            dbPoolInstance.query(queryString, (error, queryResult) => {

                // console.log("existing-model QR", queryResult);

                callback(error, queryResult);
          });
    };


    const samplesPage = (user, callback) => {

        console.log("samplespage", user);

        const queryString = "SELECT users.id as user_id, samples.id AS Sample_ID, samples.name as Company_Name, samples.type as Type, samples.comments as Comments, samples.date_logged AS Login_Date, users.username AS Logged_By FROM samples INNER JOIN users ON(users.id = samples.user_id) WHERE samples.user_id = users.id";

        console.log('queryString', queryString);

        dbPoolInstance.query(queryString, (error, queryResult) => {

                callback(error, queryResult);
          });


    };



    const addSamples = (user, callback) => {

        const queryString = `INSERT INTO samples (name, type, comments, user_id, date_logged) VALUES ($1, $2, $3, $4, $5)`;

          const values = [
            user.name,
            user.type,
            user.comments,
            user.user_id,
            user.date_logged
          ];


          // console.log(queryString);
          // execute query
          dbPoolInstance.query(queryString, values, (error, queryResult) => {
            // invoke callback function with results after query has executed
            // console.log("add samples QR", queryResult);

            callback(error, queryResult);
            });
};

    const getSamples = (user, callback) => {

        const queryString = "SELECT users.id as user_id, samples.id AS Sample_ID, samples.name as Company_Name, samples.type as Type, samples.comments as Comments, samples.date_logged AS Login_Date, users.username AS Logged_By FROM samples INNER JOIN users ON(users.id = samples.user_id) WHERE samples.user_id = users.id";

        dbPoolInstance.query(queryString, (error, queryResult) => {
            // console.log("get samples qr", queryResult);

            callback(error, queryResult);
            });
};


    const editSamples = (user, callback) => {

        const queryString = `SELECT * FROM samples WHERE id=${user.id}`;

         dbPoolInstance.query(queryString, (error, queryResult) => {
            console.log("add equip qr", queryResult);

            callback(error, queryResult);
            });
    };


    // const deleteSample = (user, callback) => {

    //     const queryString = "DELETE FROM samples WHERE";



    // };

    const equipmentForm = (user, callback) => {

        console.log("equipform", user);

        const queryString = "SELECT equipment.id, equipment.name as Equipment_Name, equipment.serial_number as serial_number, equipment.operation_manual as Operation_Manual, equipment.latest_maint AS Maint_Date, users.username AS Logged_By FROM equipment INNER JOIN users ON(users.id = equipment.user_id) WHERE equipment.user_id = users.id";



        dbPoolInstance.query(queryString, (error, queryResult) => {

                callback(error, queryResult);
          });


    };

    const addEquipment = (user, callback) => {

        const queryString = 'INSERT INTO equipment (name, serial_number, operation_manual, user_id) VALUES ($1, $2, $3, $4)';

        const values = [user.name, user.serial_number, user.operation_manual, user.user_id];

        dbPoolInstance.query(queryString, values, (error, queryResult) => {
            console.log("add equip qr", queryResult);

            callback(error, queryResult);
            });

    };



    const delEquipment = (user, callback) => {

        const queryString = `DELETE FROM equipment WHERE id = ${user.id}`;

        dbPoolInstance.query(queryString,(error, queryResult) => {
            console.log("add equip qr", queryResult);

            callback(error, queryResult);
            });
    };


    const editEquipPage = (user, callback) => {

         // console.log("editequip", user);

        const queryString = `SELECT * FROM equipment WHERE id=${user.id}`;

         dbPoolInstance.query(queryString, (error, queryResult) => {
            console.log("add equip qr", queryResult);

            callback(error, queryResult);
            });
    };

    const updateEquip = (user, callback) => {

        console.log("updateEquip user", user.equipment_id);

        const queryString = `UPDATE equipment SET name='${user.name}', serial_number='${user.serial_number}', operation_manual='${user.operation_manual}', latest_maint='${user.latest_maint}' WHERE id=${user.equipment_id}`;

        // console.log('update queryString', queryString);

            // INSERT INTO editloge (user_id, equipment_id, edit_date) VALUES ($1, $2, $3)`;

        // const values = [user.user_id, user.equipment_id, user.edit_date];

        dbPoolInstance.query(queryString, (error, queryResult) => {
            // console.log("update equip qr", queryResult);

            callback(error, queryResult);
        });
    };


    const delSample = (user, callback) => {

        console.log("delSample user", user);

        const queryString = `DELETE FROM samples WHERE id = ${user.id}`;

        console.log("delSample QS", queryString);

        dbPoolInstance.query(queryString,(error, queryResult) => {
            console.log("delSample qr", queryResult);

            // dbPoolInstance.query(queryString1,(error, queryResult) =>  {



            // });

            callback(error, queryResult);
        });
    };


    const assignSamples = (user, callback) => {

        console.log("assign", user);

        const queryString = 'SELECT * FROM users';

        dbPoolInstance.query(queryString, (error, queryResult) => {
            // console.log("update equip qr", queryResult);

            callback(error, queryResult);
        });
    };


    const testsPage = (user, callback) => {


            console.log('tests users', user);

          const queryString = `SELECT * FROM tests`;

          dbPoolInstance.query(queryString, (error, queryResult) => {
            // console.log("update equip qr", queryResult);

            callback(error, queryResult);
        });
    };

    const searchPage = (user, callback) => {

            console.log('search users', user);
            let searchWord = user.name.charAt(0).toUpperCase() + user.name.slice(1);

          const queryString = "SELECT * FROM tests WHERE name LIKE '%"+ searchWord + "%'";
          console.log("WHY ERROR", queryString);

          dbPoolInstance.query(queryString, (error, queryResult) => {
            console.log("WHAT IS THE PROBLEM", queryResult);

            callback(error, queryResult);
        });
    };

    return {
        create,
        userProfile,
        updateProfile,
        userHome,
        existing,
        samplesPage,
        addSamples,
        getSamples,
        editSamples,
        wrongPw,
        equipmentForm,
        addEquipment,
        delEquipment,
        editEquipPage,
        updateEquip,
        delSample,
        assignSamples,
        searchPage,
        testsPage
    };
};
