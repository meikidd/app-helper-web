const DataObject = require('./DataObject');

class App extends DataObject {

  static *insert(app) {
    return yield DataObject.insert(app, 'apps');
  }
  static *remove(ids) {
    return yield DataObject.remove(ids, 'apps');
  }
  static *update(app) {
    return yield DataObject.update(app, 'apps');
  }
  static *isExist(id) {
    return yield DataObject.isExist(id, 'apps');
  }
  static *isNameExist(name) {
    const sql = `select * from apps where name=?`;
    const result = yield db.sql(sql, name);
    return result.length > 0;
  }
  static *get(id) {
    return yield DataObject.get(ids, 'apps');
  }
  static *list() {
    return yield DataObject.list('apps');
  }
}
module.exports = App;

/*co(function *() {
  try {
    let app = yield App.get(1);
    console.log(app);
    // app.name = '你好';
    // yield app.dbUpdate();
    // console.log(app);

    let apps = yield App.list();
    console.log(apps);

    let isExist = yield App.isExist(1);
    console.log(isExist);


  } catch(error) {
    console.log(error);
  }
});*/

