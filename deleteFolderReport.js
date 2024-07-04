const fs = require('fs');
const path = require('path');

function deleteFolderRecursive(folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file, index) => {
      const curPath = path.join(folderPath, file);
      if (fs.lstatSync(curPath).isDirectory()) { // rekurencyjnie usuwaj podfoldery
        deleteFolderRecursive(curPath);
      } else { // usuń plik
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(folderPath); // usuń pusty folder
    console.log(`Folder ${folderPath} deleted successfully.`);
  } else {
    console.log(`Folder ${folderPath} does not exist.`);
  }
}

// Przykładowe użycie:
const folderToDelete = './cypress/report'; // ścieżka do folderu do usunięcia
deleteFolderRecursive(folderToDelete);
