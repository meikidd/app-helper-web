const co = require('co');
const util = require('util');
const db = require('./index');
const Enums = require('../common/enums');

class Element {
  constructor(props) {
    this.id = props.id;
    this.type = Enums.ElementType.get(props.type);
    this.content = props.content;
  }
}

exports.factory = function * (props) {
  if (typeof props === 'string' || typeof props === 'number') {
    // 如果参数是id，则先根据id查询
    return yield exports.get(props);
  } else if (util.isArray(props)) {
    // 如果参数是数组，则创建一个Tutorial的数组
    return props.map(prop => {
      return new Element(prop);
    });
  } else {
    return new Element(props);
  }
}

exports.insert = function * (element) {
  const sql = 'insert into tutorial_elements set ?';
  const result = yield db.query(sql, element);
  return result[0];
}

exports.get = function * (id) {
  const sql = 'select * from tutorial_elements where id=?';
  const result = yield db.query(sql, id);
  return new Element(result[0][0]);
}
exports.list = function * () {
  const sql = 'select * from tutorial_elements';
  const result = yield db.query(sql);
  return result[0];
}

exports.listByIds = function * (ids) {
  if(typeof ids === 'string') {
    ids = [ids];
  }
  const sql = 'select * from tutorial_elements where id in (?)';
  const result = yield db.query(sql, ids);
  return yield exports.factory(result[0]);
}

/*
co(function *() {
  let elements = yield exports.listByIds(2);
  console.log(elements);
});
*/
