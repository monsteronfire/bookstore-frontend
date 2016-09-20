import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('book');
  },

  setupController(controller, model) {
    Ember.set(controller, 'books', model);
  }
});
