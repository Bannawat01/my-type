//name of functions
function hello(name: string) {
    return `Hello ,${name}`
}
// console.log(hello('BannawatKung'))

//anonymous func
let kamuy = function (): string {
    return 'eiei'
}

//arrow func or lamda
let gojo = () => "nah i'd win."
// console.log(gojo())

let sum = (...nums: number[]): number => {
    let sum = 0
    for (let index = 0; index < nums.length; index++) {
        sum += nums[index]
    }
    return sum
}
function avg(...nums: number[]): number {
    return sum(...nums) / nums.length
}
function do_something(nums_array: number[], func: (...nums: number[]) => number): number {
    return func(...nums_array)
}

let nums = [50, 90, 1]
let x = do_something(nums, avg) // <- Passed as an argument
console.log(x) // 47
x = do_something(nums, sum) // <- Passed as an argument
console.log(x) // 141

