// const Obj = new Object()-------------one option to create object

const user = {}

user.id = 21321
user.emailId = 'saif@yahoo.com'
user.isLoggedIn = true

// console.log(user);

const regularUser = {
    id : 12345,
    username : {
        actualname : {
            userfullname : {
                firstname : 'kaif',
                lastname : 'akhtar'
            }
        }
    }

}

// console.log(regularUser.username.actualname.userfullname.lastname)

// const obj1 = {1: 'a', 2: 'b'}
// const obj2 = {3: 'c', 4: 'd'}
// const obj3 = {5: 'e', 6: 'f'}


// const obj4 = Object.assign({},obj1,obj2,obj3)
// const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

const myArr = [
    {
        name : 'danish',
        age : 28
    },
    {
        name : 'saif',
        age : 24
    },
    {
        name : 'kaif',
        age : 15
    }
]
// console.log(myArr[2].name)

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))

// console.log(user.hasOwnProperty('emailId'));
// console.log(user.hasOwnProperty('gmailId'));

const book = {
    bookname : 'cosmos',
    price : 999,
    isAvailableOnline : true
}

// console.log(book["bookname"]);

const {bookname: nameofbook} = book; //de-structring of object

// console.log(bookname);
console.log(nameofbook);

