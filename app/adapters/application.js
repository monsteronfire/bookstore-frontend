import DS from 'ember-data';
import Ember from 'ember';

const {
  JSONAPIAdapter
} = DS;

export default JSONAPIAdapter.extend({
  pathForType(type){
    return Ember.String.pluralize(Ember.String.underscore(type));
  }
});
