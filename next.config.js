const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass')

module.exports = withCSS(
  withSass({
    sassLoaderOptions: {
      includePaths: ['./src', './node_modules'],
    },
  })
)
