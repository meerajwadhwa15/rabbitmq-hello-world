const postMessage = require('./messages/postMessage');
const listenMessage = require('./messages/listenMessages');

listenMessage('test 1');
listenMessage('test 2');
postMessage();