module.exports = (app, db) => {

  const users = require('./controllers/user')(db);

  /*
   *  =========================================
   *  Users
   *  =========================================
   */
  // CRUD users
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
  app.delete('/sample/del', users.delSample);
  app.get('/admin/home', users.assignSamples);
  app.get('/profile/:name', users.userProfile);
  // app.get('/lab/tests', users.testsPage);
  // app.get('/equip/edit', users.editEquipment);

};