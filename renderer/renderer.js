const { ipcRenderer } = require("electron");

const loadSidebar = require("./components/sidebar");
const loadWelcome = require("./components/welcome");
const loadDownload = require("./components/download");
const loadLaunch = require("./components/launch");

loadSidebar();

loadWelcome();

setActiveMenuItem("welcome");

document.getElementById("welcome").addEventListener("click", () => {
  loadWelcome();
  setActiveMenuItem("welcome");
});

document.getElementById("download").addEventListener("click", () => {
  loadDownload();
  setActiveMenuItem("download");
});

document.getElementById("launch").addEventListener("click", () => {
  loadLaunch();
  setActiveMenuItem("launch");
});

function setActiveMenuItem(menuItemId) {
  const menuItems = document.querySelectorAll("#sidebar ul li");
  menuItems.forEach((item) => {
    if (item.id === menuItemId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
