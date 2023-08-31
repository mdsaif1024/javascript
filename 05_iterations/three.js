//for of

// let num = [21,22,23,24,25] 

// for (const array of num) {
//     console.log(array);
// }


const greetings = ' Hey! My Love';
for (const greet of greetings) {
    console.log(greet);
}

//map

const map = new Map()
map.set('In','India')
map.set('Pak','Pakistan')
map.set('UK','United Kingdom')
console.log(map);

for (const [key, value] of map) {
    console.log(key,':-', value);
}