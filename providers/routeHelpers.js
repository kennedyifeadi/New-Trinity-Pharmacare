function isActiveRoute(route, currentRoute) {
  return route === currentRoute
    ? "md:text-blue-700 text-white bg-blue-700 md:bg-transparent"
    : "md:hover:text-blue-700 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent";
}

module.exports = { isActiveRoute };
