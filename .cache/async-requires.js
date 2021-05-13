// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-ateliers-js": () => import("./../../../src/pages/ateliers.js" /* webpackChunkName: "component---src-pages-ateliers-js" */),
  "component---src-pages-cart-js": () => import("./../../../src/pages/cart.js" /* webpackChunkName: "component---src-pages-cart-js" */),
  "component---src-pages-contact-js": () => import("./../../../src/pages/contact.js" /* webpackChunkName: "component---src-pages-contact-js" */),
  "component---src-pages-index-js": () => import("./../../../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-produits-js": () => import("./../../../src/pages/produits.js" /* webpackChunkName: "component---src-pages-produits-js" */),
  "component---src-templates-atelier-template-index-js": () => import("./../../../src/templates/AtelierTemplate/index.js" /* webpackChunkName: "component---src-templates-atelier-template-index-js" */),
  "component---src-templates-product-template-index-js": () => import("./../../../src/templates/ProductTemplate/index.js" /* webpackChunkName: "component---src-templates-product-template-index-js" */)
}

