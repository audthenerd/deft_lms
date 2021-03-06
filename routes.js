module.exports = (app, db) => {

var multer = require('multer');
var upload = multer({ dest: './uploads/' });

const users = require('./controllers/user')(db);

  /*
   *  =========================================
   *  Users
   *  =========================================
   */
  // CRUD users
  app.get('/error', users.handleError);
  app.get('/home/redirect', users.redirectHome);
  app.get('/users/new', users.newForm);
  app.post('/users/int', users.create);
  app.get('/home/:name', users.userHome);
  app.get('/lab/samples', users.samplesPage);
  app.post('/lab/sint', users.addSamples);
  app.get('/login', users.loginForm);
  app.post('/users/account', users.existing);
  app.get('/users/account', users.userHome);
  app.get('/lab/sint', users.getSamples);
  app.get('/logout', users.logOut);
  app.get('/users/lint', users.wrongPw);
  // app.get('/lab/samples/delete', users.deleteSample);
  app.get('/lab/equipment', users.equipmentForm);
  app.post('/equip/int', users.addEquipment);
  app.delete('/equip/del', users.delEquipment);
  app.get('/equip/edit', users.editEquipPage);
  app.post('/equip/edit/int', users.updateEquip);
  app.get('/sample/edit', users.editSamples);
  app.delete('/sample/del', users.delSample);

  app.get('/admin/home', users.assignSamples);
  app.get('/profile/:name', users.userProfile);
  app.get('/profile/:name/update', users.updateProfile);
  // app.post('profile/int', users.);
  app.get('/lab/tests', users.testsPage);
  app.get('/lab/tests/search', users.searchPage);
  app.post('/lab/tests/new', upload.single('myFile'));
  app.post('/lab/tests/new', users.addTests);

  // app.get('/equip/edit', users.editEquipment);

};