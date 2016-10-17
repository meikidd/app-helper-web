/*
  ElementType
*/

const Enum = require('enumify').Enum;

class ElementType extends Enum {
  static get(value) {
    return ElementType.enumValues.find(item => item.value === value)
  }
}

ElementType.initEnum({
  TEXT: {
    value: 'text',
    description: '文本',
  },
  IMAGE: {
    value: 'image',
    description: '图片',
  },
});

module.exports = ElementType;
