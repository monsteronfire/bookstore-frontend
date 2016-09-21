import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('author', params.author_id);
  },

  setupController(controller, model) {
    Ember.set(controller, 'author', model);
  },

  actions: {
    blurBackground(blur) {
      this.controllerFor('application').set('blur', blur);
    }
  }
});
