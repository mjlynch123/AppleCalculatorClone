const { app, BrowserWindow, Menu } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 400,
    height: 500,
    resizable: false
  });

  // Remove the default menu bar
  Menu.setApplicationMenu(null);

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
});
