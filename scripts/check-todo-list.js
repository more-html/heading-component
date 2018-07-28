const fs = require('fs');
const path = require('path');

const changelog = fs.readFileSync(path.join(__dirname, '../CHANGELOG.md'), 'utf-8');
const lines = changelog.split('\n');
let latestVersionStartsAtLine = -1;
let nextVersionStartsAtLine = -1;
lines.forEach((line, lineNumber) => {
  if (latestVersionStartsAtLine!==-1 && nextVersionStartsAtLine===-1 && line.startsWith('v')) nextVersionStartsAtLine = lineNumber;
  if (latestVersionStartsAtLine===-1 && line.startsWith('# v')) latestVersionStartsAtLine = lineNumber;
});

const items = lines.slice(latestVersionStartsAtLine, nextVersionStartsAtLine);
const versionName = items[0];
const notYetDone = items.slice(1).filter(line => line.startsWith('- [ ]'));
if (notYetDone.length === 0) {
  process.exit(0);
}
console.log('+------------- you have stuff to do');
console.log(`| ${notYetDone.length} items marked as TODO (in ${versionName})`);
console.log('|    ' + (notYetDone.join('\n|    ')));
console.log('+------------- get it done!');

process.exit(-1);
