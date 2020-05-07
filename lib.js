const notifier = require("node-notifier");

const request = function() {
  return {
    write() {
      console.log("Request created");
    }
  };
};

const response = function() {
  return {
    write(arguments) {
      console.log(arguments);
    }
  };
};

const server = {
  createServer: function(callback) {
    console.log("Creating server");

    notifier.notify({
      title: "Node server",
      message: "Creating server",
      timeout: 10,
      actions: void 0,
      dropdownLabel: void 0,
      reply: false
    });

    callback(new request(), new response());
    return this;
  },

  listen: function(port) {
    console.log("Listen in the port: " + port);
    return this;
  },

  exec: function(command, delegate) {
    let error = false;
    let msg = "";

    (function(arguments) {
      msg = "Command: '" + command + "' executed successfully. ";
    })(command);

    delegate(error, msg);

    return this;
  }
};

module.exports = server;
