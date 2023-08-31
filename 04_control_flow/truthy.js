// falsy value
// false, 0, -0, BigInt, 0n, "",null, undefined, NaN

//truthy value
// "0", "false", [], {}, " ", function(){},{}

const myArr = []

if(myArr.length === 0){
    // console.log("this is an empty array");
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    // console.log("this is an empty object");
}


//nullish collecing operator*************************************************
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = undefined ?? null
// val1 = null ?? undefined
// val1 = 5 ?? null
val1 = 50 ?? 15

// console.log(val1);

//ternary operator***********************************************************

const priceOfBook = 199
priceOfBook >=100 ? console.log('price is more than 100') : console.log("price is less than 100");