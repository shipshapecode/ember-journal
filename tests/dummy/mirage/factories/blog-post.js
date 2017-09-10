import { Factory, faker } from 'ember-cli-mirage';
import moment from 'moment';

export default Factory.extend({
  author() {
    return `${faker.name.firstName()} ${faker.name.lastName()}`;
  },
  slug() {
    return faker.helpers.slugify(this.title);
  },
  date: faker.list.cycle(moment('10-10-2017').toDate(), moment('8-9-2010').toDate(), moment('11-11-2011').toDate()),
  title: faker.list.cycle('Ember.js ftw!', 'Removing jQuery from Ember.js', 'My first Ember App', 'Another one', 'Work work work')
});
