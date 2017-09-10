import { computed, get } from '@ember/object';
import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import moment from 'moment';

export default Model.extend({
  author: attr('string'),
  date: attr('date'),
  title: attr('string'),

  day: computed('date', function() {
    return moment(get(this, 'date')).date();
  }),
  month: computed('date', function() {
    return moment(get(this, 'date')).month();
  }),
  year: computed('date', function() {
    return moment(get(this, 'date')).year();
  })
});
