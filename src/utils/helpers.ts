import fs from 'fs';
import path from 'path';

export function clearFolders(folderNames: string[]) {
  for(const directory of folderNames) {
  fs.readdir(directory, (err, files) => {
    if (err) throw err;
    for (const file of files) {
      fs.unlink(path.join(directory, file), (err) => {
        if (err) throw err;
      });
    }
  });
}
}