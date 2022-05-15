// TODO: What are we importing?
const fs = require('fs');
// filesystem library
// console.log(fs)

// // TODO: Add comments to explain each of the three arguments of appendFile()
// appendFile takes 3 argus
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);


