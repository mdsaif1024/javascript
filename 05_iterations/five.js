// for each loop 

const garage = ['bike','car','bus','auto','e-rikshaw']

// garage.forEach(function(item){
    //     console.log(item);
    // })
    
    
    // garage.forEach((item)=>{
        //     console.log(item);
        // })
        
        // function printItem(garage){
            //     console.log(garage);
            // }
            
            // garage.forEach(printItem)
            
            // garage.forEach((key,value,arr)=>{
                //     console.log(key,value,arr);
                // })
                
                const myCoding = [
                    {
                        'language':'python',
                        'language style':'py',
                    },
    {
        'language':'ruby',
        'language style':'rb',
    },
    {
        'language':'java',
        'language style':'jv',
    }
]

myCoding.forEach((item)=>{
    // console.log(item['language'],':-',item['language style']);
    // console.log();
})

const myNum = [1,3,4,2,5,6]
// const newNum = myNum.filter((num)=> num > 4)
// const newNum = myNum.filter((num)=>{
//    return  num > 4
// })
// console.log(newNum);

const newNum = []

myNum.forEach((num)=>{
    if(num>4){
        newNum.push(num)
    }
})
// console.log(newNum);


