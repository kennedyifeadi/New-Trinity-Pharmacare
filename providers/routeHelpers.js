function isActiveRoute(route, currentRoute) {
    return route === currentRoute ? 'md:text-blue-700 text-white' : "md:hover:text-blue-700 text-gray-700"
  }
  
  module.exports = { isActiveRoute };