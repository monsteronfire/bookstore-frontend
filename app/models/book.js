import DS from 'ember-data';

const {
  attr,
  belongsTo
} = DS;

export default DS.Model.extend({
  title: attr('string'),
  price: attr('number'),
  author: belongsTo('author', { async: true, inverse: 'books' }),
  publisher: belongsTo('publisher', { polymorphic: true, async: true, inverse: 'published' })
});
