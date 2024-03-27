const options = {year:"numeric"};
document.getElementById("currentYear").textContent = new Date().toLocaleDateString("en-US", options);
document.getElementById("lastModified").innerText = `Last Modified: ${document.lastModified}`;