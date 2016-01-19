"use strict"

let yuta = "nakamura"
console.dir( {yuta} );

class Yuta {
	getLastName() {
		return "Nakamura"
	}
}

let last = (new Yuta()).getLastName()
console.dir( {last} );

let header = new (require("./header.js"))
let h = document.createElement("div")
h.innerHTML = header.getContent()
console.dir( {h} );
document.body.appendChild(h)

var arr = [
	{ id: 1, name: "nakamura"},
	{ id: 2, name: "yuta"},
	{ id: 3, name: "pico"},
]

console.dir( {arr} );

global._ = require("node_modules/underscore/underscore.js")
var result = _.findWhere(arr, {name: "yuta"})

console.dir( {result} );

// require("./body.css")
// System.import("app/body.css!")	
