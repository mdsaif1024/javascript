const value = [1,2,3,4,5,6,7,8,9]

// const newValue = value.map((num)=>{return num+10})

const anotherValue = []
value.forEach((num) => {
    return anotherValue.push(num+10)
})
console.log(anotherValue);
// console.log(value);