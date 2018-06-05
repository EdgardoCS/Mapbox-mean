var incomingG;

const fs = require("fs");
const {
  dialog
} = require("electron").remote;

document.getElementById("mapBuild").addEventListener("click", () => {

  dialog.showOpenDialog((fileNames) => {
    if (fileNames === undefined) {
      console.log("no file selected");
      return;
    }

    fs.readFile(fileNames[0], "utf-8", (err, data) => {
      if (err) {
        console.log("cannot read", err);
        return;
      }
      tryParseJSON(data);
      console.log(incomingG);
    });
  });
}, false);

function tryParseJSON(data) {
  try {
    incomingG = JSON.parse(data);
    if (incomingG && typeof incomingG === "object") {
      flagG = 1;
      return incomingG;
    }
  } catch (e) {
    return false
  }
};
