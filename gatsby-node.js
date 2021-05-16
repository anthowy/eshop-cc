const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};



exports.createPages = ({ actions, graphql }) => {
	const { createPage } = actions;
	const productTemplate = path.resolve('./src/templates/ProductTemplate/index.js');
	const atelierTemplate = path.resolve('./src/templates/AtelierTemplate/index.js');
	const BlogTemplate = path.resolve('./src/templates/BlogTemplate/index.js');
	
	// Individual blogs pages
	const product = graphql(`
  {
    produits: allShopifyProduct(filter: {productType: {eq: "Boutique"}    }) {
       edges {
         node {
           shopifyId
           handle
         }
       }
     }
   }
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create product pages
		result.data.produits.edges.forEach(({ node }) => {
			createPage({
        path: `produits/${node.handle}`,
				component: productTemplate,         context: {
          shopifyId: node.shopifyId,
        },

			});
		});
	});

	// Atelier
	const atelier = graphql(`
		{
      ateliers: allShopifyProduct(filter: {productType: {eq: "Atelier"}    }) {
        edges {
          node {
            shopifyId
            handle
          }
        }
      }
    }
    
	`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create atelier pages
		result.data.ateliers.edges.forEach(({ node }) => {
			createPage({
        path: `ateliers/${node.handle}`,
				component: atelierTemplate,
        context: {
          shopifyId: node.shopifyId,
        },
			});
		});
	});
// blog page 


	const blog = graphql(`
	{
      blog:allDatoCmsBlog {
		  edges{
			  node{
				id
				slug
			  }
			
		  }
		
	}
}`).then(result => {
		if (result.errors) {
			Promise.reject(result.errors);
		}

		// Create bloge pages
		result.data.blog.edges.forEach(({ node }) => {
			createPage({
        path: `blog/${node.slug}`,
				component: BlogTemplate,
        
			});
		});
	});



	// Return a Promise which would wait for both the queries to resolve
	return Promise.all([product, atelier, blog]);
};

