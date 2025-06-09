import { Console } from "console"
import { Sex } from "./type/type"

interface student {
    name: string
    age: number
    sex: Sex
}

interface items {
    id: number
    name: string
    price: number
}

interface User {
    ageInMouths: number
    name: string
}

function _type_interface(): student {
    let someOne: student = { name: 'bannawat', age: 20, sex: 'male' }
    return someOne
}

//array
let items: items[] = [
    { id: 1, name: 'muhaha', price: 1000 },
    { id: 2, name: 'sword', price: 100 },
    { id: 3, name: 'bow', price: 10000 }
]
// let delete_item = items.splice(1, 1)
// console.log("delete :", delete_item)

// let add_item: items = { id: 4, name: 'axe', price: 500 }
// items.push(add_item)

// let item = items.shift()
// console.log("item :", item)

// let find_item = items.find((item) => item.id === 2)
// console.log("find_item :", find_item)

// let filter_items = items.filter((item) => item.price > 500)
// console.log("filter_items :", filter_items)
// console.log("items :", items)

//side effects

const users = [
    { ageInMouths: 240, name: 'Alice' },
    { ageInMouths: 300, name: 'Bob' },
]

function findUserAgeByName(users: User[], name: string): number {
    if (users.length === 0) { //has side effects
        return 0
    }

    const user = users.find(u => u.name === name)
    if (!user) {
        throw new Error("user not found") //has side effects
    } else {
        return user.ageInMouths //no side effects
    }
}

const userAge1 = findUserAgeByName(users, 'Alice') // 240
console.log(`Bannawat is ${userAge1 / 12} years old.`)

const userAge2 = findUserAgeByName([], 'Bob') // 300
console.log(`Bob is ${userAge2 / 12} years old.`) //error: user not found