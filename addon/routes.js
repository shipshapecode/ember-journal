import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('author', { path: '/author/:author' });
  this.route('post', { path: '/*path/' });
});
