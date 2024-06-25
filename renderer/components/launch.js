module.exports = function loadLaunch() {
  document.getElementById("content").innerHTML =
    '<h1>Launch App</h1><button id="launchBtn">Launch</button>';
  document.getElementById("launchBtn").addEventListener("click", () => {
    ipcRenderer.send("launch-file");
  });
};
