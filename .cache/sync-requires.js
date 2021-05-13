
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/src/pages/404.js")),
  "component---src-pages-ateliers-js": preferDefault(require("/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/src/pages/ateliers.js")),
  "component---src-pages-cart-js": preferDefault(require("/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/src/pages/cart.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/src/pages/index.js")),
  "component---src-pages-produits-js": preferDefault(require("/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/src/pages/produits.js")),
  "component---src-templates-atelier-template-index-js": preferDefault(require("/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/src/templates/AtelierTemplate/index.js")),
  "component---src-templates-product-template-index-js": preferDefault(require("/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/src/templates/ProductTemplate/index.js"))
}

