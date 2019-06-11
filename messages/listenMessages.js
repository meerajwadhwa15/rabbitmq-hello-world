var connect  = require('./../rabbitmq/connect');

module.exports = function(type) {
    connect(function(channel) {
        var queue = 'hello';
        channel.consume(queue, function(msg) {
        console.log(" [x] Received %s -- %s", msg.content.toString(), type);
        }, {
            noAck: true
        });
    });
}