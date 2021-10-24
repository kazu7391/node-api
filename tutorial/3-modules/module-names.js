// Every file is module (by default)

// private (local in this file)
const ACCESS_KEY = 'access_key'

// public (shared)
const person1 = "Ana"
const person2 = "John"

module.exports = { person1, person2 }

module.exports.items = ['item1', 'item2']

const person = {
    name: 'Vinh',
}
module.exports.singlePerson = person