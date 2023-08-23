//singleton
// Object.create

//Object literals

const MySym = Symbol('key1')

const myObject = {
    name : 'saif',
    'full name': 'md saif akhtar',
    age : 24,
    location : 'gaya',
    [MySym]: 'myKey1',
    email : 'saif@google.com',
    isLogedIn : true,
    loginDays:['monday','wednesday']
}
console.log(myObject);

console.log(myObject.email);
console.log(myObject['email']);
console.log(myObject['full name']);
// console.log(myObject["full name"]);
console.log(myObject[MySym]);

myObject.greeting = function(){
    console.log('hello user');
}
console.log(myObject.greeting());

myObject.greeting2 = function(){
    console.log(`hello user...${this.name}`);
}
console.log(myObject.greeting2());


