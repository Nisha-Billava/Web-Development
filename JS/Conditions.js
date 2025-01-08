// if-statement
    // if(cond){
    //     // executable code
    // }

// let usn='Pyspiders'
// let prompt=require('prompt-sync')({sigint:true})
// let usn= prompt("Enter Username:")
// if(usn==='Pyspiders'){
//     console.log(`Welcome to home,${usn}`)
// }
// else{
//     console.log(`Invalid User`)
// }


// let prompt=require('prompt-sync')({sigint:true})
// let usn=prompt("Enter usn:")
// let pass=prompt("Enter pass")
// let rePass=prompt("Re-enter password:")
// if(usn==='Pyspiders'){
//     console.log("Username is valid")
// }
// else if(pass==='pysp@123'){
//     console.log("Password is valid")

// }
// else if(rePass==='pysp@123'){
//     console.log('password is matching')
// }
// else{
//     console.log('Invalid password or usn')
// }





// nested-if conditions
// let prompt=require('prompt-sync')({sigint:true})
// let usn=prompt("Enter usn:")
// if(usn!=""){
//     let pass=prompt("Enter pass")
//     if(pass!=""){
//         console.log(`User is ${usn} and Password is ${pass}`)
//     }
//     else{
//         console.log("Please enter password")
//     }
// }
// else{
//     console.log("Please enter username")
// }





// Namma metro scenario
// let prompt=require('prompt-sync')({sigint:true})
// let ticket=prompt("Enter yes if you scan the ticket for entry\:")
// if(ticket=='yes'){
//     let exit=prompt("Enter yes if you scan for exit:")
//     if(ticket==exit){
//         console.log("Thanks to commute with namma metro,Visit again")
//     }
//     else{
//         console.log("Scan your ticket to exit")
//     }

// }
// else{
//     console.log("Entry is not allowed,Please scan ticket")
// }




// switch-case 
// let prompt=require('prompt-sync')({sigint:true})
// let num=parseInt(prompt("Choose your number:"))
// switch(num){
//     case 1:
//         console.log("Your choice is ONE")
//         break;
//     case 2:
//         console.log("Your choice is TWO")
//         break;
//     case 3:
//         console.log("Your choice is THREE")
//         break;
//     default:
//         console.log("Your choice is INVALID")
//         break;
// }




// Hotel menu scenario
let prompt=require('prompt-sync')({sigint:true})
amt=0
famt=0
console.log("--------------MENU--------------\n1.Idli\t\t6.Chapathi meals\n2.DOsa\t\t7.Mudde meals\n3.Pongal\t8.Ricebath\n4.Puri\t\t9.Roti curry\n5.BisiBele Bath 10.Rice Sambar\n----------------------------------")
ch=parseInt(prompt("Enter Your Choice(1 to 10):"))
switch(ch){
    case 1:
        console.log("Your choice is: Idli")
        plate=prompt("Enter the number of plates:")
        amt=20*plate
        famt=amt+(amt*0.05)
        console.log(`Payable amount(including GST):${famt}`)
        console.log("Thanks & Visit again")
    case 2:
        console.log("Your choice is: Dosa")
        plate=prompt("Enter the number of plates:")
        amt=30*plate
        famt=amt+(amt*0.05)
        console.log(`Payable amount(including GST):${famt}`)
        console.log("Thanks & Visit again")
    case 3:
        console.log("Your choice is:Pongal ")
        plate=prompt("Enter the number of plates:")
        amt=25*plate
        famt=amt+(amt*0.05)
        console.log(`Payable amount(including GST):${famt}`)
        console.log("Thanks & Visit again")
    case 4:
        console.log("Your choice is: Puri")
        plate=prompt("Enter the number of plates:")
        amt=35*plate
        famt=amt+(amt*0.05)
        console.log(`Payable amount(including GST):${famt}`)
        console.log("Thanks & Visit again")
    case 5:
        console.log("Your choice is: Bisibele Bath")
        plate=prompt("Enter the number of plates:")
        amt=50*plate
        famt=amt+(amt*0.05)
        console.log(`Payable amount(including GST):${famt}`)
        console.log("Thanks & Visit again")
    case 6:
        console.log("Your choice is: Chapathi meals")
        plate=prompt("Enter the number of plates:")
        amt=75*plate
        famt=amt+(amt*0.05)
        console.log(`Payable amount(including GST):${famt}`)
        console.log("Thanks & Visit again")
    case 7:
        console.log("Your choice is: Mudde meals")
        plate=prompt("Enter the number of plates:")
        amt=80*plate
        famt=amt+(amt*0.05)
        console.log(`Payable amount(including GST):${famt}`)
        console.log("Thanks & Visit again")
    case 8:
        console.log("Your choice is: Rice Bath")
        plate=prompt("Enter the number of plates:")
        amt=50*plate
        famt=amt+(amt*0.05)
        console.log(`Payable amount(including GST):${famt}`)
        console.log("Thanks & Visit again")
    case 9:
        console.log("Your choice is: Roti Curry")
        plate=prompt("Enter the number of plates:")
        amt=70*plate
        famt=amt+(amt*0.05)
        console.log(`Payable amount(including GST):${famt}`)
        console.log("Thanks & Visit again")
    case 10:
        console.log("Your choice is: Rice sambar")
        plate=prompt("Enter the number of plates:")
        amt=30*plate
        famt=amt+(amt*0.05)
        console.log(`Payable amount(including GST):${famt}`)
        console.log("Thanks & Visit again")
    default:
        console.log("Invalid Choice")

}

