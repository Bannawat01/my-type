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
console.log("items :", items)