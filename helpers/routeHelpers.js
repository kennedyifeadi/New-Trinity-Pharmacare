function isActiveRoute(route, currentRoute) {
    return route === currentRoute && 'page';
  }
  
  module.exports = { isActiveRoute };