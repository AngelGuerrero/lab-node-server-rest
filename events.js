let events = [];

function init() {
  return [false, "The system is starting..."];
}

function loading() {
  return [false, "The system is loading..."];
}

function loaded() {
  return [false, "Load succesfully!"];
}

function error() {
  return [true, "Something went wrong... :("];
}


const emitter = {
  function on(eventName) => events.push(eventName);
};


module.exports = emitter;
