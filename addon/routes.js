import buildRoutes from 'ember-engines/routes';

export default buildRoutes(function() {
  this.route('post', { path: '/:year/:month/:day/:slug/' });
});
