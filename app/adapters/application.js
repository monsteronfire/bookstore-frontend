import DS from 'ember-data';
import Ember from 'ember';

const {
  JSONAPIAdapter
} = DS;

const {
  String
} = Ember;

export default JSONAPIAdapter.extend({
  pathForType(type){
    return String.pluralize(String.underscore(type));
  }
});
