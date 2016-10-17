const co = require('co');
const util = require('util');
const db = require('./index');
const Enums = require('../common/enums');
const tutorialElements = require('./tutorial_elements');

class Tutorial {
  constructor(props) {
    this.id = props.id;
    this.title = props.title;
    this.device = Enums.Device.get(props.device);
    this.os = Enums.OS.get(props.os);
    this.userId = props.user_id;
    this.elements = props.elements;
  }
  *getElements() {
    this.elements = yield tutorialElements.listByIds(this.elements.split(','));
  }
  *isExist() {
    return yield exports.isExist(this.id);
  }
  *dbInsert() {
    const isExist = yield this.isExist();
    if (isExist) {
      // TODO 插入elements
      yield exports.update(this.toObject());
    } else {
      // TODO 更新elements
      yield exports.insert(this.toObject());
    }
  }
  *dbRemove() {
    yield exports.remove(this.id);
  }
  *dbUpdate() {
    const isExist = yield this.isExist();
    if (isExist) {
      // TODO 更新elements
      yield exports.update(this.toObject());
    }
  }
  toObject() {
    return {
      id: this.id,
      title: this.title,
      elements: this.elements.map(element => element.id).join(),
      device: this.device.value,
      os: this.os.value,
      user_id: this.userId
    }
  }
}

exports.factory = function *(props) {
  if (typeof props === 'string' || typeof props === 'number') {
    // 如果参数是id，则先根据id查询
    let tutorial = yield exports.get(props);
    return tutorial;
  } else if (util.isArray(props)) {
    // 如果参数是数组，则创建一个Tutorial的数组
    let tutorials = [];
    for (var i = 0; i < props.length; i++) {
      let tutorial = new Tutorial(props[i]);
      yield tutorial.getElements();
      tutorials.push(tutorial);
    }
    return tutorials;
  } else {
    let tutorial = new Tutorial(props);
    yield tutorial.getElements();
    return tutorial;
  }
}

exports.insert = function * (tutorial) {
  if(tutorial.id) {
    // 去掉前端生成的随机id
    delete tutorial.id;
  }
  const sql = 'insert into tutorials set ?';
  const result = yield db.query(sql, tutorial);
  tutorial.id = result[0].insertId;
  return yield exports.factory(tutorial);
}

exports.remove = function * (ids) {
  if(typeof ids === 'string') {
    ids = [ids];
  }
  const sql = 'delete tutorials where id in (?)';
  yield db.query(sql, ids);
  return ids;
}

exports.update = function * (tutorial) {
  const sql = 'update tutorials set ? where id=?';
  yield db.query(sql, [tutorial, tutorial.id]);
  return yield exports.factory(tutorial);
}

exports.isExist = function * (id) {
  const sql = 'select * from tutorials where id=?';
  const result = yield db.query(sql, id);
  return result[0].length > 0;
}

exports.get = function * (id) {
  const sql = 'select * from tutorials where id=?';
  const result = yield db.query(sql, id);
  return yield exports.factory(result[0][0]);
}

exports.list = function * () {
  const sql = 'select * from tutorials';
  const result = yield db.query(sql);
  return yield exports.factory(result[0]);
}

/*
co(function *() {
  try {
    let tutorial = yield exports.get(1);
    console.log(tutorial);
    // tutorial.title = '你好';
    // yield tutorial.dbUpdate();
    // console.log(tutorial);

    let tutorials = yield exports.list();
    console.log(tutorials);

    let isExist = yield exports.isExist(1);
    console.log(isExist);


  } catch(error) {
    console.log(error);
  }
});
*/
