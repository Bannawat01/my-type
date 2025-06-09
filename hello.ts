import { Sex } from "./type/type"

interface student {
    name: string
    age: number
    sex: Sex
}
function _type_interface(): student {
    let someOne: student = { name: 'bannawat', age: 20, sex: 'male' }
    return someOne
}

