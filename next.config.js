const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
const withPWA = require('next-pwa')

module.exports = withPWA(
  withImages(
    withCSS(
      withSass({
        sassLoaderOptions: {
          includePaths: ['./src', './node_modules'],
        },
        pwa: {
          dest: 'public',
        },
      })
    )
  )
)
