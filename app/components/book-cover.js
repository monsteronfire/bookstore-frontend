import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    open() {
      Ember.get(this, 'book').reload().then( () => {
        Ember.set(this, 'isShowingModal', true);
        Ember.get(this, 'blurBackground')(true);
      });
    },

    close() {
      Ember.set(this, 'isShowingModal', false);
      Ember.get(this, 'blurBackground')(false);
    }
  }
});
