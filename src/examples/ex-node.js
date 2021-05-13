const pageSize = 10;
const createPaginationPages = ({allWordpressPost}, createPage) => {
  const pageCount = Math.ceil(allWordpressPost.edges.length / pageSize);
  return Array.from({length: pageCount}).map((_, index) => createPage({
    path: `/page/${index + 1}`,
    component: path.resolve(`./src/templates/posts.js`),
    context: {
      skip: index * pageSize,
      limit: pageSize,
      pageCount,
      currentPage: index + 1
    }
  }))
};