const electron = require("electron");
const { app, BrowserWindow, Menu, ipcMain } = electron;
const path = require("path");
const url = require("url");


let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1000, height: 800 });
  mainWindow.loadURL("http://localhost:3000");
  mainWindow.on("closed", function() {
    mainWindow = null;
  });
  const mainMenu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(mainMenu);
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});

const menuTemplate = [];
