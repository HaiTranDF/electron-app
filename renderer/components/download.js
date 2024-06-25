module.exports = function loadDownload() {
  document.getElementById("content").innerHTML =
    '<h1>Download</h1><button id="downloadBtn">Download</button>';
  document.getElementById("downloadBtn").addEventListener("click", () => {
    ipcRenderer.send("download-file");
  });
};
