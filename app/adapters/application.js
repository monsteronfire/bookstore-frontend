import DS from 'ember-data';
import Ember from 'ember';

const {
  JSONAPIAdapter
} = DS;

export default JSONAPIAdapter.extend({
  pathForType(type){
    return Ember.String.pluralize(Ember.String.underscore(type));
  },

  shouldReloadRecord(store, snapshot) {
    return false;
  },

  shouldBackgroundReloadRecord(store, snapshot) {
    console.log('calling shouldBackgroundReloadRecord');
    const loadedAt = snapshot.record.get('loadedAt');

    if (Date.now() - loadedAt > 3600000) {
      return true;
    } else {
      return false;
    }
  }
});
