// // console.log("Hello, World!");
// // console.log("My name is Pragya.");
// // console.log(7+3);
// // var message;
// // message="Hello geeks World!";
// // console.log(message);
// // console.log(message);
// // message="Hello geeks for geeks";
// // console.log(message);
// // let text;//creating a variable
// // text = "javascript";//assigning a value to the variable
// // console.log(text);

// // const number=3;

// // console.log(number);
// // var message="hii";
// // console.log(message);

// // var message="hie";
// // var message="hi";
// // console.log(message);

// // let message="hii";
// // message="hie";
// // message="hi";
// // console.log(typeof message);
   
// // let isproductincart=null;
// //  console.log(typeof isproductincart); 
// // const personDetails={
// //     name: "Pragya",
// //     age: 25,
// //     isStudent: true,
  
    
// // }
// // const Sync = require('readline-sync');
// // const userName=Sync.question("What is your name? ");
// // //console.log("Hello, " + name);
// //  console.log(`Hello ${userName} ,welcome to gfg`);
// //  console.log("A" <"B");
// //  console.log(null==undefined);
// //    console.log(null===undefined);
// //     console.log(null===0);
// //     console.log(null>=0);
// //     console.log(null<1);
// // const readline = require('readline-sync');
// // const num= Number(readline.question("enter the number? "));
 
// //  const remOf3= num%3;
// //   const remOf5= num%5;
// // if(remOf3===0 && remOf5===0){
// //      console.log("fizz");
// //   }
// //    if(remOf5==0 || remOf3===0){
// //    console.log("buzz");  
// // }
// //     else{
// //          console.log("This is false");
// //     }
// // const firstName = "pragya";
// // const nickName = null;
// // //console.log(typeof firstName);
// // let name = firstName && nickName ;
// // console.log(`name is ${name}`);
// // for(let i=0; i<=100; i++){
// //     console.log(i);
// // }

// //  let userName = "Pragya";
// //  console.log(userName[0]); 
//   // for(let i=1; i<=10; i++){
//   //   let row = "";
//   //   for(let j=1; j<=i; j++){
//   //   row+= "*";
//   // }
//   // console.log(row);
//   // }
// // accountcity = "jaipur"
// // console.log(typeof accountcity)
// // const accountId=12345
// // let accountEmail ="pragya"
// // console.log(accountcity,accountId,accountEmail)
// // console.table([accountcity,accountId,accountEmail])
//   // let isLoggedIn=""
//   // let booleanIsLoggedIn = Boolean(isLoggedIn)
//   // console.log(typeof booleanIsLoggedIn)
//   //  console.log(booleanIsLoggedIn) 

//   // let value =3 
//   // let negValue =-value
//   // console.log(negValue)
//   // console.log("1"+(2+2))
//   //  console.log((1+2)+"2")
//   // console.log(+true)
//   //  console.log("")
//   //    console.log(+"")
//   // a=20;
//   //    console.log(++a);
//   //    console.log(a++);
//   //    console.log(a);


//   // console.log(null > 0)
//   // console.log(null == 0)
//   // console.log(null >= 0)

//   // console.log(undefined == 0)
//   // console.log(undefined > 0)
//   // console.log(undefined < 0)

//   // console.log(undefined == null)

//   //+++++++++++++++++++++++++++++++++++++++++++++++++
//    //primitive

//    // 7 types : string ,Number  ,Boolean , null ,undefined
//    // , symbol ,BigInt


//    //Reference (Non Primitive)
//    //Array , Objects , Functions

//   //  const heros =["Shiva","Krishna","Rama"];
//   // let myobj={
//   //   name: "Pragya",
//   //   age: 25, 
//   // }
//   // const myFunction = function(){
//   //   console.log("Hello from my function");
//   // }



//   //+++++++++++++++++++++++++++++++++++++++++++++++++
// // stack(Primitive(copy)) ,heap(non-primitive(reference(original value)))

// // let myYoutubeName = "Pragya";
// // let anotherName=myYoutubeName;
// // console.log(anotherName); 
// // anotherName="Pragya Sharma";

// // console.log(myYoutubeName); // Pragya
// // console.log(anotherName); // Pragya Sharma



// // let userOne={
// //    email : "pragyamishra0025",
// //     userId : 12345,
// // }
// // let userTwo = userOne;
// // userTwo.email = "pragy"

// // console.log(userOne.email); // pragya
// // console.log(userTwo.email); // pragya


// //++++++++++++++++++++++++++++++++++++++++++++++++++

// // const getName = new String('pragya');
// // console.log(getName[0]); 
// // console.log(getName.length); // 6
// // console.log(getName.__proto__); // String {}
// // console.log(getName.__proto__.__proto__); // Object {}
// // console.log(getName.toUpperCase()); // PRAGYA
// // console.log(getName.charAt(0)); // p
// // console.log(getName.slice(0, 3)); // pra
// // // Negative values are counted from the end of the string:

// // // -1 = last character

// // // -2 = second last, etc.
// // const anotherString = getName.slice(-6,5); //pragy
// // console.log(anotherString); 



// //++++++++++++++++++++++++++++++++++++++++++++++++++++
// // const score = 400
// // console.log(score); // 400

// // const balance = new Number(1000);
// // console.log(balance); 

// // console.log(balance.valueOf()); 
// // console.log(balance.toString()); 
// // console.log(balance.toFixed(2)); // 1000.00
// // console.log(balance.toString().length); 

// // const otherNamme = 23.8966
// // console.log(otherNamme.toPrecision(3));

// // const otherrName = 123.8966
// // console.log(otherrName.toPrecision(3));

// // const otherName = 1123.8966
// // console.log(otherName.toPrecision(3)); // 23.9

// // const hundreds = 10000000;
// // console.log(hundreds.toLocaleString('en-IN')); // 10,000,000

// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// // console.log(Math);
// // console.log(Math.PI); 
// // console.log(Math.E); // 2.718281828459045
// // console.log(Math.abs(-4));
// // console.log(Math.round(4.6));
// // console.log(Math.ceil(4.2));//will roundoff in high always
// // console.log(Math.floor(4.6));//will roundoff in low bound always
// // console.log(Math.min(4,3,2,5,6,7,1));
// // console.log(Math.max(4,3,2,5,6,7,1));
// // console.log(Math.random());//always give value between 0 to 1
// // console.log((Math.random()*10)+1);

// // const min=10
// // const max = 20;
// // console.log(Math.floor(Math.random()*(max-min+1))+min)

// //+++++++++++++++++++++++++++++++++++++++++++++++++
// // let myDate = new Date();
// // console.log(myDate.toString()); // current date and time
// // console.log(myDate.toJSON()); // current date and time
// // console.log(myDate.toDateString()); // current date and time
// // console.log(myDate.toLocaleString()); // current date and time
// // console.log(typeof myDate); // object

// // let myCreateDate = new Date(2023,0,24); 
// // console.log(myCreateDate.toDateString())
// // let myCreaateDate = new Date(2023,0,24 , 5, 3); 
// // console.log(myCreaateDate.toLocaleString())

// // let myTimeStamp = Date.now();
// // console.log(myTimeStamp); // 1706085600000

// // let newDate = new Date()
// // console.log(newDate)
// // console.log(newDate.getMonth()+1); 
// // console.log(newDate.getDay());
// //const a = newDate.toLocaleString('default', { weekday: 'long' }); // "Monday", "Tuesday", etc.


// //++++++++++++++++++++++++++++++++++
// //Array
// const myArr = [0,1,2,3,4,5]
//  //console.log(myArr);
//  const myArr2 = new Array(1,2,3,4,5);
// //  console.log(myArr2);
// //  myArr2.push(6)
// //  console.log(myArr2);
// //  myArr2.pop();
// //  console.log(myArr2);
// //  myArr2.unshift(0);
// //  console.log(myArr2);
// //   myArr2.shift(0);
// //  console.log(myArr2);
// // console.log(myArr2.indexOf(3)); // 2
// // console.log(myArr2.includes(3)); // true
// // console.log(myArr2)
// // const newArr = myArr2.join()
// // console.log(myArr2)
// // console.log(typeof myArr2)
// // console.log(typeof newArr); 

// // Slice Splice
// // console.log("A",myArr);
// // const myn1=myArr.slice(1,3); // [1, 2]
// // console.log(myn1)
// // console.log("B",myArr);

// // const myn2=myArr.splice(1,3); // [1, 2,3] and orange array will be 0,4,5 so its manipulate original array

// // console.log("c",myArr);
// // console.log(myn2)

// const marvel_heroes = ["thor", "ironman", "hulk", "spiderman", "captain america"];
// const dc_heroes = ["batman", "superman", "flash", "aquaman"];
// // marvel_heroes.push(dc_heroes); 
// // console.log(marvel_heroes); // ["thor", "ironman", "hulk", "spiderman", "captain america", Array(4)]
// // console.log(marvel_heroes[5]); 
// // const all_heroes = marvel_heroes.concat(dc_heroes); 
// // console.log(all_heroes); 
// // const all_heroes1 = [...marvel_heroes,...dc_heroes]; 
// // console.log(all_heroes1); 

// // console.log(Array.isArray("pragya"));//false
// // console.log(Array.from({name : "pragya"}));//interview
// // console.log(Array.from("Pragya")) // ['p', 'r', 'a', 'g', 'y', 'a'] //interview

// // let score1=100
// // let score2=200
// // let score3=300
// // let score4=400

// // console.log(Array.of(score1,score2,score3,score4)); // [100, 200, 300, 400]


// //+++++++++++++++++++++++++++++++++++++++++++++++

// //singleton (constructorse banega to hn ingelton nai to nai)
// //object.create() //object.create() is used to create a new object with the specified prototype object and properties.


// //obj literal
// // const mySum = Symbol("mySum");
// // const user = {
// //   name : "Pragya",
// //   age : 25, 
// //   //mySym :"myKey1",
// //   [mySum] :"myKey1",
// //   email : "pragyamishra0025@gmail.com",
// //   "isStudent" : true,
// //   isLoggedIn : false,
// //   location : "India",
// //   lastLogin : ["Monday", "Tuesday", "Wednesday"],

// // }
// // console.log(user.email)
// // console.log(user["email"]); // pragya
// // console.log(user["isLoggedIn"]); // false
// // console.log(user[mySum]); // myKey1

// // //Object.freeze(user); // This will make the object immutable, preventing any changes to its properties
// // user.email = "pragymish@2025"; // This will not change the email property
// // console.log(user);
// // // for 2nd one typeof user; // object

// // user.greeting=function () {
// //   console.log(`Hello, my name is ${this.name}`);
// // }
// // console.log(user.greeting()); // Hello, my name is Pragya

// // const obj1 = {1:"a",2:"b",3:"c"};
// // const obj2 = {4:"d",5:"e",6:"f"};
// // const obj3 = {7:"g",8:"h",9:"i"};
// // //const obj4={obj1,obj2,obj3}; // This will
// // //const obj5 = Object.assign({},obj1,obj2,obj3);
// // //console.log(obj4); 
// // //console.log(obj5); // {1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f", 7: "g", 8: "h", 9: "i"}
// // // const obj4={...obj1,...obj2,...obj3};
// // // console.log(obj4)

// // const userset = [
// //   {
// //   id:1,
// //   name: "Pragya",
// // },
// // {
// //    id:2,
// //   name: "Pragya",
// // },
// // {
// //  id:3,
// //   name: "Pragya",
// // },
// // ]
// // // userset[1].id
// // // console.log(userset[0].id); 
// // // console.log(userset[1].id); 
// // // console.log(userset[2].id); 
// // //  console.log(Object.keys(obj1)); 
// // //  console.log(Object.values(obj2));
// // //  console.log(Object.entries(obj2));
// //   const course = {
// //     courseName: "JavaScript",
// //     price: "$100",
// //     courseInstructor : "Pragya",
// //   }

// //  // course.courseName;

// //  const{courseName : Name,price ,courseInstructor : Inst} = course; //destructuring
// //  console.log(`Course Name: ${Name}, Price: ${price}, Instructor: ${Inst}`); // Course Name: JavaScript



// //++++++++++++++++++++++++++++++++++++++++++++++++
// // function declaration

// // function sayMyName(){
// // console.log("P");
// // console.log("R");
// // console.log("A");
// // console.log("G");
// // console.log("Y");
// // console.log("A");
// // }

// // //sayMyName(); // P R A G Y A
// // function addTwoNumbers(num1,num2){
// // console.log(num1+num2);
// // }
// // const result=addTwoNumbers(3,5); // 8
// // console.log("Result:",result); 

// const myArray =[200,400,300,600]
// function returnSecondValue(getArray){
//   return getArray[1]
// }
//  
// val1=null??undefined
// console.log(val1); // null
// val1=undefined?? null
// console.log(val1); // null
// const arr=[1,2,3,4,5,6,7,8,9,10]
// for (const i of arr) {
//   console.log(i);
// }
// for (const key in arr) {
//   console.log(key); // 0 1 2 3 4 5 6 7 8 9
//    console.log(`${key} : ${arr[key]}`); // 0 : 1 1 : 2 2 : 3 3 : 4 4 : 5 5 : 6 6 : 7 7 : 8 8 : 9 9 : 10
// }
// const coding=["JavaScript", "Python", "Java", "C++"];
// for (const [index, value] of coding.entries()) {
//   console.log(`${index} : ${value}`); // 0 : JavaScript 1 : Python 2 : Java 3 : C++
// }

//  coding.forEach((value, index) => {
//   console.log(`${index} : ${value}`); // 0 : JavaScript 1 : Python 2 : Java 3 : C++
//  })
//  coding.forEach(function(value, index) {
//   console.log(`${index} : ${value}`); // 0 : JavaScript 1 : Python 2 : Java 3 : C++
//  })


//  const myNums =[1,2,3,4,5,6,7,8,9,10]
// // let newNums=myNums.filter((num)=>num>4)
// // console.log(newNums) //5,6,7,8,9,10
// const newNums =[]
// myNums.forEach((num) =>{
//   if(num>4){
//     newNums.push(num)
//   }
// })
// console.log(newNums)

// const book =[
//   {
//     title : 'Book One' ,genre : 'Fiction' , publish : 1981,
//     edition : 2004
//   },
//   {
//     title : 'Book Two' ,genre : 'Non-Fiction' , publish : 1992,
//     edition : 2008
//   },
//   {
//     title : 'Book Three' ,genre : 'History' , publish : 1999,
//     edition : 2007
//   },
//   {
//     title : 'Book Four' ,genre : 'Science' , publish : 2005,
//     edition : 2010
//   },
//   {
//     title : 'Book Five' ,genre : 'Biography' , publish : 2010,
//     edition : 2015
//   },
//   {
//     title : 'Book Six' ,genre : 'Fantasy' , publish : 2015,
//     edition : 2020
//   }
// ];
// const newBook = book.filter((bk) => bk.publish >= 2000 );
// console.log(newBook); // [{ title: 'Book Four', genre: 'Science', publish: 2005, edition: 2010 }, { title: 'Book Five', genre: 'Biography', publish: 2010, edition: 2015 }, { title: 'Book Six', genre: 'Fantasy', publish: 2015, edition: 2020 }]


//+++++++++++++++++++++++
//chaining
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArray = myArray
//   .filter(num => num > 5) // Filter numbers greater than 5
//   .map(num => num * 2) // Double the filtered numbers
//   .reduce((acc, num) => acc + num, 0); // Sum the doubled numbers//12+!$+!^+!*+@0
//  console.log(newArray); // [12, 14, 16, 18, 20]



//const myTotal=myArray.reduce(function(acc , currval){
//    console.log(`acc : ${acc} and currval : ${currval}`)
//   return acc+currval
// },0)
// console.log(myTotal)

// const myTotal=myArray.reduce((acc, currval) => {
//   console.log(`acc : ${acc} and currval : ${currval}`)
//   return acc + currval;
// },0)
// console.log(myTotal)
// const myTotale=myArray.reduce((acc, currval) =>  acc + currval,0)
// console.log(myTotale)