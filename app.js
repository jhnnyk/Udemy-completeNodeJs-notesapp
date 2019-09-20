const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is John.');

fs.appendFileSync('notes.txt', ' I have appended something to the file!');
