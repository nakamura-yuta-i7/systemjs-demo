"use strict"

module.exports = class Header {
	constructor() {
		
	}
	getContent() {
		return `
			<header>
				<h1>System.js</h1>
			</header>
			<style>
				header {
					padding: 10px;
					background: blue;
				}
				header h1 {
					color: #fff;
				}
			</style>
		`
	}
}
