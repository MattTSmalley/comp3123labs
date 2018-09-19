var events = require('events');
var eventEmitter = new events.EventEmitter();

var fn = function() {
    console.log('call me.');
    eventEmitter.emit('maybe');
}

var fn2 = function() {
    console.log('maybe.')
}

eventEmitter.on('call', fn);
eventEmitter.on('maybe', fn2);
eventEmitter.emit('call')