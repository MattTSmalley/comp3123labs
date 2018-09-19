var events = require('events');
var eventEmitter = new events.EventEmitter();

var fn = function () {
    console.log('call me.');
    eventEmitter.emit('two')
}
var fn2 = function () {
    console.log('911');
}

eventEmitter.on('call', fn);
eventEmitter.on('two', fn2)
eventEmitter.emit('call');