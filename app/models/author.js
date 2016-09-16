import Publisher from './publisher';
import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  books: hasMany('book', { async: true )}
});
