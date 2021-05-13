var plugins = [{
      name: 'gatsby-plugin-styled-components',
      plugin: require('/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"topLevelImportPaths":[],"pure":false},
    },{
      name: 'gatsby-plugin-image',
      plugin: require('/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/node_modules/gatsby-plugin-image/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-google-gtag',
      plugin: require('/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/node_modules/gatsby-plugin-google-gtag/gatsby-ssr'),
      options: {"plugins":[],"trackingIds":["AW-CONVERSION_ID","DC-FLOODIGHT_ID"],"gtagConfig":{"optimize_id":"OPT_CONTAINER_ID","anonymize_ip":true,"cookie_expires":0},"pluginConfig":{"head":false,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"]}},
    },{
      name: 'gatsby-plugin-verify-bing',
      plugin: require('/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/node_modules/gatsby-plugin-verify-bing/gatsby-ssr'),
      options: {"plugins":[],"userIds":[""],"xmlFileName":"BingSiteAuth.xml"},
    },{
      name: 'gatsby-plugin-google-fonts',
      plugin: require('/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/node_modules/gatsby-plugin-google-fonts/gatsby-ssr'),
      options: {"plugins":[],"fonts":["roboto Mono","Dancing Script"],"display":"swap"},
    },{
      name: 'gatsby-plugin-react-helmet',
      plugin: require('/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      name: 'gatsby-plugin-manifest',
      plugin: require('/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      name: 'gatsby-plugin-breadcrumb',
      plugin: require('/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/node_modules/gatsby-plugin-breadcrumb/gatsby-ssr'),
      options: {"plugins":[],"defaultCrumb":{"location":{"pathname":"/"},"crumbLabel":"Accueil","crumbSeparator":" / "}},
    },{
      name: 'default-site-plugin',
      plugin: require('/home/anthony/kDrive/avant/Visuelle/Coccinelles et compagnies/site/eshop/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    try {
      const result = plugin.plugin[api](args, plugin.options)
      if (result && argTransform) {
        args = argTransform({ args, result })
      }
      return result
    } catch (e) {
      if (plugin.name !== `default-site-plugin`) {
        // default-site-plugin is user code and will print proper stack trace,
        // so no point in annotating error message pointing out which plugin is root of the problem
        e.message += ` (from plugin: ${plugin.name})`
      }

      throw e
    }
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
