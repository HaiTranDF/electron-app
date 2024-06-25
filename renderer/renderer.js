const { ipcRenderer } = require("electron");

const loadSidebar = require("./components/sidebar");
const loadWelcome = require("./components/welcome");
const loadDownload = require("./components/download");
const loadLaunch = require("./components/launch");

const sectionLoaders = {
  welcome: loadWelcome,
  download: loadDownload,
  launch: loadLaunch,
};

loadSidebar();

loadSection("welcome");

Object.keys(sectionLoaders).forEach((section) => {
  documentd
    .getElementById(section)
    .addEventListener("click", () => loadSection(section));
});

function loadSection(section) {
  sectionLoaders[section]();
  setActiveMenuItem(section);
}

function setActiveMenuItem(menuItemId) {
  const menuItems = document.querySelectorAll("#sidebar ul li");
  menuItems.forEach((item) => {
    item.classList.toggle("active", item.id === menuItemId);
  });
}
