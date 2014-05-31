function SocketListener(socket_url) {
  // socket listener will instantiate a new socket listening to a web socket url.
  // socket listener will set default onopen event listener.
  // socket listener will set default onclose event listener.
  // socket listener will set default onmessage event listener.
  //
  // the public api of socketlistener will be getSocket which will return the WebSocket
  //
  var socket;
  this.getSocket = function() { return socket; };

  (function initialize(klass) {
    socket = new WebSocket(socket_url);
    socket.onopen = function() { console.log('WebSocket opened.'); };
  })(this);
};
