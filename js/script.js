

// let myobject = {
//     firstName:"nika",
//     lastname:"bakidze",
//     address:"Tbilisi, Varketili",
//     age:14,
//     phonenumber:[
//     577104567
//     ]
// }
// console.log(myobject)

// let num1 = 10

// if (num1 > 10){
//     console.log("10 metia")
// }else if (num1 == 10 ){
//     console.log("num1 da num 2 tolebi arain")
// }else{'num1 num2-ze naklebia'}

// let ricxvi = 10


// switch(ricxvi){
//     case 10:
//         console.log('es ricxvi aris 10')
//         break;
//     case 11:
//         console.log('es ricxvi aris 11')
//         break;
//     case 12:
//         console.log("es ricxvi aris 12")
//         break;
//     case 13:
//         console.log("es ricxvi aris 14")
//         break;
//     case 14:
//         console.log("es ricxvi aris 14")
//         break;
//         default:
//     console.log( "es ricxvi aris 15")

// }









// let cvladi = 10

// switch(cvladi){
//     case 10:
//         console.log( "es cvladi = 10")
//         break;
//     case 11:
//         console.log("es cvladi = 11")
//         break;
//     case 12:
//         console.log("es cvladi = 12")
//         break;
//     case 13:
//         console,log("es cvladi = 13")
//         break;
//     case 14:
//         console.log("es cvladi = 14")
//         break;
//     default:
//         console.log("es cvladi =15")
// }

// let array =["nika wiko noza ilo saba"]

// console.log(array)
// array.shift()
// array.push("nika")

// if (saxelebi [4] == "nika") {
//     console.log( "nika")
// }
// else if (saxelebi [4] == "wiko") {
//     console.log ("wiko")
// }

// else if (saxelebi [4] == "noza") {
//     console.log ("noza")
// }

// else if (saxelebi [4] == "ilo") {
//     console.log ("ilo")
// }


// else {
//     console.log ("saba")
// }


// let students =["nika","andria","luka","givi"]
// students.push("saba") 

// students.unshift("mari")

// students.pop()

// students.shift()

// console.log(students)





// let obj = {
//     model: 'iPhone 15',
//     releaseDate: '20/01/20',
//     price: 300
// };
// console.log(obj)








// let num1 = 20

// let num2 = 15
// if (num1 > num2){
//     console.log("20 metia 10ze")
// }else if(num1 == num2){
//     console.log("num1 da num2 tolebi arian")
// }else{"num1 num2=ze naklebia"}


// let taxxxi = "tbilis"

// switch("city"){
//     case "tbilisi":
//         console.log( "printi 10 lari")
//         break;
//     case "batumi":
//         console.log("printi 20 lari")
//         break;
//     case kutaisi:
//         console.log("printi 30 lari")
//         break;
//     case "rustavi":
//         console,log("printi 12 lari")
//         break;

//     default:
//         console.log("25 lar")
// }


// let array = [1,2,3,4,5];

// let stud ={
//     name:"andria",
//     age:20,
//     sub:["math","science","english"]
// };

// if(stud.age> 18 ){
//     console.log("adult")
// }else if
//     ("stud.age ==18"){
    
// console.log("tolia")
// }else{
//     console.log("minor")
// }






// let numberss = [1 ,2, 3, 4, 5, 6, 7 , 8, 9, 10];


// let even = [];
// for(let a = 0; a < numberss.length; a++) {
//     if (numberss[a] % 2 == 0)
//     even.push(numberss[a]);
// }

// console.log(`Even numbers in an array are: `);










// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let sum = 0; 
//     for (let i = 0; i < array.length; i++) { sum += array[i]; } 
//     console. log(sum);



// function sayhello(){
//     console.log("hallo worldd")
// }
// sayhello()

// function greet(name){
//     console.log("hallo "+ name)
// }
// greet("grisha")

// function checknumbers(num){
//     if(num>10){
//         console.log("num metia 10ze")
//     }
//     else{
//         console.log("10ze naklebia")
//     }
        
//     }
//     checknumbers(11)




const username = "nika"
const welcomeMSG = document.getElementById("welxomeMSG");
welcomeMSG.textContent += username === "" ? "guest" : username