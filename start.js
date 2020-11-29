// gmc - by minusyt23

const Electron = require("electron");

function createWindow () {
  const win = new Electron.BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // win.setMenu();
  win.loadFile("index.html");
}

Electron.app.whenReady().then(createWindow);

Electron.app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    Electron.app.quit();
  }
});

Electron.app.on("activate", () => {
  if (Electron.BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});