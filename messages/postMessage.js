var connect  = require('./../rabbitmq/connect');

module.exports = function(type) {
    connect(function(channel) {
        var queue = 'hello';
        channel.assertQueue(queue, {
        durable: false
        });

        var i = 1;
        setInterval(function() {
            var msg = 'Hello world - '+ i++;
            channel.sendToQueue(queue, Buffer.from(msg));
            console.log(" [x] Sent %s", msg);
        }, 1000);
    });
}
