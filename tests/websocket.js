const WebSocket = function(url){
  this.onopen = function(){ }
  this.onmessage = function(cb){ cb() }
}

module.exports = function(window) {
  window.WebSocket = WebSocket
}