var mqttalk = require('mqttalk')
// var module = require('mqttalk/lib/module')

const jsonPut = mqttalk.jsonPut
const jsonGet = mqttalk.jsonGet

const payload = {
		id: 1,
		status: 'online',
		timestamp: Date.now()
	}

let json = jsonPut(payload)
// let obj = jsonGet(json)

console.log(json)
// console.log(obj)

