const a = process.argv[2];
const b = process.argv[3];

if (a === b) {
    console.log(true);
} else {
    console.log(false);
}

console.log(a === b ? true : false);

console.log(a === b);

console.log(process.argv[2] === process.argv[3]);