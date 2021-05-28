module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-google-gtag/gatsby-browser.js'),
      options: {"plugins":[],"trackingIds":["AW-CONVERSION_ID","DC-FLOODIGHT_ID"],"gtagConfig":{"optimize_id":"OPT_CONTAINER_ID","anonymize_ip":true,"cookie_expires":0},"pluginConfig":{"head":false,"respectDNT":true,"exclude":["/preview/**","/do-not-track/me/too/"]}},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"gatsby-starter-default","short_name":"starter","start_url":"/","background_color":"#663399","theme_color":"#663399","display":"minimal-ui","icon":"src/images/gatsby-icon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"4a9773549091c227cd2eb82ccd9c5e3a"},
    },{
      plugin: require('../node_modules/gatsby-plugin-breadcrumb/gatsby-browser.js'),
      options: {"plugins":[],"defaultCrumb":{"location":{"pathname":"/"},"crumbLabel":"Accueil","crumbSeparator":" / "}},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
