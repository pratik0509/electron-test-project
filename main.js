const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow
const url = require('url')
const path = require('path')

let brwsrWindow

var createWindow = function() {
	brwsrWindow = new BrowserWindow({width: 500, height: 500});
	brwsrWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}))
}

app.on('ready', createWindow)
