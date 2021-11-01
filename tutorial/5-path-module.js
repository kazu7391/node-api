// Path module
const path = require('path')

console.log(path.sep)  // return sep of system path "\" or "/"

const filePath = path.join('/test-folder', 'subfolder', 'test.txt')
console.log(filePath)  // return path of test.txt (with current file)

const baseName = path.basename(filePath)
console.log(baseName)  // return filename of test.txt

const absolutePath = path.resolve(__dirname, 'test-folder', 'subfolder', 'test.txt')
console.log(absolutePath)   // return full system path