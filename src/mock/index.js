import { createServer } from 'miragejs';

import data from './data.json';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/posts', () => {
      return data.posts;
    });

    this.get('/posts/category', (schema, request) => {
      const { categories } = request.queryParams;
      const categoryList = categories ? categories.split(',') : []; // Split comma-separated values

      // Use filter to get posts matching the selected categories
      const filteredPosts = data.posts.filter((post) =>
        post.categories.some((category) => categoryList.includes(category.name))
      );

      return filteredPosts;
    });
  },
});
