
const better = {
  init: function () {
    let error = true;
    let msg = "Init better module";

    return [error, msg];
  },

  exec: function (callback) {
    let error = true;
    let msg = "Module: 'better', function: 'exec', executed successfully";

    if (callback && typeof callback === 'function') {
      callback(error, msg);
    }
  }
};

module.exports = better;
