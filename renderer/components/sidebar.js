module.exports = function loadSidebar() {
  document.getElementById("sidebar").innerHTML = `
    <ul>
      <li id="welcome">Welcome</li>
      <li id="download">Download</li>
      <li id="launch">Launch App</li>
    </ul>
  `;
};
