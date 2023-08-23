let myDate = new Date()
console.log(myDate.toLocaleString())
console.log(myDate.toDateString())
console.log(myDate.getTime());

let myCreatedDate = new Date(2050,9,15,1,0,0)
console.log(myCreatedDate.toString());

let myTimeStamp = Date.now()
console.log(Math.floor(myTimeStamp/1000));

// myDate.toLocaleString('default',{
//     weekday: "narrow" 
// })
// console.log(myDate.toDateString())

let aNewDate = new Date('05-06-1999')
console.log(aNewDate.toLocaleString());





