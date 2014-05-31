var triggerEvent = function(listenerObject, eventString) {
      listenerObject.dispatchEvent(new MessageEvent(eventString, {}));
}

describe('SocketListener', function() {
  describe("#getSocket", function() {
    it('returns an instance of WebSocket', function() {
      var listener = new SocketListener('ws://somesocket');
      expect(listener.getSocket().constructor).toBe(WebSocket);
    });
  });

  describe('when a socket is opened', function() {
    // fails when run in ci mode.
    // phantomjs has poor support for new MessageEvent
    it('should log a message out to the console', function() {
      spyOn(console, 'log');
      var listener = new SocketListener('ws://somesocket');
      triggerEvent(listener.getSocket(), 'open');
      expect(console.log).toHaveBeenCalled();
    });
  });

  describe('when a socket receives a message', function() {
    it('should trigger an event', function() {
      spyOn($('body'), 'trigger');
      var listener = new SocketListener('ws://somesocket');
      triggerEvent(listener.getSocket(), 'message');
      expect($('body').trigger).toHaveBeenCalled();
    });
  });
});
