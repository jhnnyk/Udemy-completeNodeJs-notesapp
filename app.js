const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// Customize yargs version
yargs.version('0.1.0');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note content',
      demandOption: true,
      type: 'string'
    }
  },
  handler: function(argv) {
    console.log('Title: ' + argv.title + '\n' + 'Content: ' + argv.body);
  }
});

// Create remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function() {
    console.log('Removing the note');
  }
});

// Create list command
yargs.command({
  command: 'list',
  describe: 'List all the notes',
  handler: function() {
    console.log('Listing all the notes');
  }
});

// Create read command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function() {
    console.log('Reading a note');
  }
});

yargs.parse();
