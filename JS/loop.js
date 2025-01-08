//1. for loop

// syntax:
// for(start_val;end_condition;step_value){
//     //executable code
// }

// Examples:

// for(let i=1;i<=10;i++){
//     console.log(i)
// }


// num=""
// for(let i=1;i<=10;i++){
//     num+=i+""
// }
// console.log(num)


// printing numbers in reverse order from n to 0
// let prompt=require('prompt-sync')({sigint:true})
// n=parseInt(prompt("Enter n:"))
// for(let i=n;i>=0;i--){
//     console.log(i)
// }
    


// Printing the odd numbers in reverse order from n to 1
let prompt=require('prompt-sync')({sigint:true})
// n=parseInt(prompt("Enter n:"))
// for(i=n;i>=1;i--){
//     if(i%2!==0){
//         console.log(i)
//     }
// }




//2. for of loop(used to iterate through collections)
// let bigBasket=['Bread','Milk','Snacks','Vegs','Oils','Households','Groceries']
// console.log("Items in BigBasket:",bigBasket)

// for(let i of bigBasket){
//     console.log(i)
// }

// 3.for in loop(iterate through objects)
// const studentInfo={
//     firstName:'Virat',
//     lastName:'Tendulkar',
//     degree:'B.Tech',
//     stream:'Civil',
//     yop:2024,
//     contact:{
//         mobile:9876543210,
//         mailId:'virat@gmail.com'
//     },
//     address:'Bangalore'
// }
// for(i in studentInfo){
//     console.log(i,studentInfo[i])
// }

// level1 object
// for(let i in studentInfo){
//     if(typeof studentInfo[i]==='object'){
//         for(let j in studentInfo[i]){
//             console.log(j,studentInfo[i][j])
//         }
//     }
//     else{
//         console.log(i,studentInfo[i])
//     }
// }

// level2 object
const studentInfo={
    firstName:'Virat',
    lastName:'Tendulkar',
    degree:'B.Tech',
    stream:'Civil',
    yop:2024,
    contact:{
        mobile:9876543210,
        mailId:{
            personal:'virat@gmail.com',
            official:'virat123@gmail.com'
        }
    },
    address:'Bangalore'
}
for(let i in studentInfo){
    if(typeof studentInfo[i]==='object'){
        for(let j in studentInfo[i]){
            if(typeof studentInfo[i][j]==='object'){
                for(let k in studentInfo[i][j]){
                    console.log(k,studentInfo[i][j][k])
                }
            }
            else{
                console.log(j,studentInfo[i][j])
            }
        }
    }
    else{
        console.log(i,studentInfo[i])
    }
}