// GLOBALS VARIABLES

// __dirname    - path to the current directory
// __filename   - file name
// require      - function to use module
// module       - info about current module (file)
// process      - info about env where the program is being executed

console.log(__dirname);
console.log(__filename);

console.log("Waiting..");
setTimeout(() => {
    console.log("After 2 seconds...")
}, 2000);

setInterval(() => {
    console.log("Every 3 seconds!");
}, 3000);