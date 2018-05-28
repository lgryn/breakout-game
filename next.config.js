module.exports = {
  exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
      '/stats': { page: '/stats' },
    }
  },
  assetPrefix: '.',
}
