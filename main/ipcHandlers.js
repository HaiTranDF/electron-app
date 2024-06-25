const { ipcMain, dialog } = require("electron");
const fs = require("fs");
const https = require("https");
const { execFile } = require("child_process");

let downloadedFilePath = "";

ipcMain.on("download-file", (event) => {
  const url = process.env.DOWNLOAD_URL;
  const filePath = dialog.showSaveDialogSync({
    title: "Save File",
    defaultPath: "deepin.exe",
  });

  if (filePath) {
    downloadedFilePath = filePath;
    const file = fs.createWriteStream(filePath);
    https
      .get(url, (response) => {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log("Download completed.");
        });
      })
      .on("error", (err) => {
        fs.unlink(filePath, () => {});
        console.error("Download failed:", err.message);
      });
  }
});

ipcMain.on("launch-file", () => {
  if (downloadedFilePath) {
    execFile(downloadedFilePath, (err) => {
      if (err) {
        console.error("Failed to launch the file:", err.message);
        return;
      }
      console.log("File launched successfully.");
    });
  } else {
    console.error("No file has been downloaded yet.");
  }
});

module.exports = { downloadedFilePath };
