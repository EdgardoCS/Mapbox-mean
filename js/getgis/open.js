var parse = require('../../js/getgis/manager.js')
var sleep = require('../../js/getgis/getcoord.js')

var incomingG;
var flagG = 0;

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

      if (flagG == 1) {
        if (incomingG.name == "cerros_IMV") {
          sleep.drifting(incomingG);
        } else {
          parse.parser(incomingG);
        }
        flagG = 0;
      }

    });
  });
}, false);

function tryParseJSON(data) {
  try {
    incomingG = JSON.parse(data);
    if (incomingG && typeof incomingG === "object") {
      flagG = 1;
      return incomingG, flagG;
    }
  } catch (e) {
    return false
  }
};
