import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    limit: {
      refreshModel: true
    }
  },

  model(params) {
    return this.store.query('book', params);
  },

  setupController(controller, model) {
    Ember.set(controller, 'books', model);
  },

  actions: {
    showAll() {
      const total = this.controllerFor('books').get('total');
      this.transitionTo({queryParams: { limit: total }});
    },

    blurBackground(blur) {
      this.controllerFor('application').set('blur', blur);
    }
  }
});
