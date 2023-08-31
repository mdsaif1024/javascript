let heros = ['salman','amir','aksahy', 'ritik']
 let heroins = ['katrina', 'deepika', 'kajol']
 let all_celebs = [...heroins,...heros] //this is spread method and can be used instead of concat*****************
 console.log(all_celebs); 


 let anotherArr = [1,2,3,[4,5],6,[7,8,[9,10]]]
 let newArr = anotherArr.flat(2)
 console.log(anotherArr);
 console.log(newArr);

 


 console.log(Array.isArray('saif'));
 console.log(Array.from('saif'));

 const one = 100
 const two = 200
 const three = 300
 console.log(Array.of(one,two,three));


