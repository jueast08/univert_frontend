"use strict";

import { NFC, TAG_ISO_14443_3, TAG_ISO_14443_4, KEY_TYPE_A, KEY_TYPE_B } from '../src/index';
import pretty from './pretty-logger';


const nfc = new NFC(); // const nfc = new NFC(pretty); // optionally you can pass logger to see internal debug logs

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

function broadcast_nfc_tag(card_id){
	var clients = io.sockets.clients();

	for (var i = 0; i < clients.length; i++) {
		console.log(card_id);
			clients[i].emit('message', card_id);
	}
}

app.get('/', function(req, res){
	res.send('<h1>Hello world</h1>');

});

io.on('connection', function(socket){
  console.log('Front-End connected');
});

http.listen(3000, function(){
	console.log('listening on *:3000');
	nfc.on('reader', async reader => {

		pretty.info(`device attached`, reader);
		reader.on('card', async card => {
			pretty.info(`card detected`, reader, card);
			var clients = io.sockets.clients();
			io.sockets.emit('message', card.uid);
		});

		reader.on('error', err => {
			pretty.error(`an error occurred`, reader, err);
		});

		reader.on('end', () => {
			pretty.info(`device removed`, reader);
		});


	});

	nfc.on('error', err => {
		pretty.error(`an error occurred`, err);
	});

});
