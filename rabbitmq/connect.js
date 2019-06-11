var amqp = require('amqplib/callback_api');

module.exports = function(callback) {
    amqp.connect('amqp://localhost', function(err, connection) {
    if (err) {
        throw err;
    }
    connection.createChannel(function(err, channel) {
        if (err) {
            throw err
        }
    
        callback(channel);
    });
    });
}