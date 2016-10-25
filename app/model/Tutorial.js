// const co = require('co');
const DataObject = require('./DataObject');
// const TutorialElements = require('./tutorial_elements');

class Tutorial extends DataObject {

  static *insert(tutorial) {
    return yield DataObject.insert(tutorial, 'tutorials');
  }
  static *remove(ids) {
    return yield DataObject.remove(ids, 'tutorials');
  }
  static *update(tutorial) {
    return yield DataObject.update(tutorial, 'tutorials');
  }
  static *isExist(id) {
    return yield DataObject.isExist(id, 'tutorials');
  }
  static *get(id) {
    return yield DataObject.get(ids, 'tutorials');
  }
  static *list() {
    return yield DataObject.list('tutorials');
  }
}
module.exports = Tutorial;

/*co(function *() {
  try {
    let tutorial = yield Tutorial.get(1);
    console.log(tutorial);
    // tutorial.title = '你好';
    // yield tutorial.dbUpdate();
    // console.log(tutorial);

    let tutorials = yield Tutorial.list();
    console.log(tutorials);

    let isExist = yield Tutorial.isExist(1);
    console.log(isExist);


  } catch(error) {
    console.log(error);
  }
});*/

