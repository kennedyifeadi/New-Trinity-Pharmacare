// Description: Try Catch provider.
// Dependencies: none
module.exports = function tryCatch(fn) {
  return async function (req, res, next) {
    try {
      await fn(req, res);
    } catch (err) {
      console.log(err);
    }
  };
};