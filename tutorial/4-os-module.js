// OS Modules
const os = require('os')

// Get current user info
const user = os.userInfo()
console.log(user)

// Method return the system uptime (seconds)
console.log(`The System Uptime is ${os.uptime()} secs`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)