import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
  store: service(),

  model(params) {
    const { slug } = params;

    return this.get('store').query('blog-post', { filter: { slug } }).then((posts) => {
      return posts.get('firstObject');
    });
  }
});
