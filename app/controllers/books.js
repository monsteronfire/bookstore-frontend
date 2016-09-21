import Ember from 'ember';
const {
  computed,
  get
} = Ember;

export default Ember.Controller.extend({
  queryParams: ['limit'],
  limit: 5,

  total: computed('books.meta', function () {
    return get(this, 'books.meta').total;
  }),

  showAll: computed('total', 'books', function () {
    return get(this, 'total') > get(this, 'books.length');
  })
});
