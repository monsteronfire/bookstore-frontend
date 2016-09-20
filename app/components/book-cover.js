import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    open() {
      Ember.set(this, 'isShowingModal', true);
    },

    close() {
      Ember.set(this, 'isShowingModal', false);
    }
  }
});
