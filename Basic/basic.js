const z = [1,2,3,4];

const y = {name:'nikki'};

const a = [...z];

console.log( a); // ans is 1 2 3 4 not a Array

console.log(typeof(a)); // type is object

//  not is arry 


// quation number 2 ----------------------

console.log(typeof(NaN));  // type is Number


// quation number 3 ----------------------


const data = 10  + + 10;

console.log(data);

// 4 ------------


const newSet = new Set([1,1,2,3,3,4,4,5,6]);

console.log(newSet);

console.log(typeof(newSet)); // type is object

// 5 -------------------

const dalateData = { name: 'nikesh'};

console.log(delete dalateData.name , 'nikki'); // ans is True

const dalData = { name: 'nikesh'};

console.log(delete dalData); // ans is false


// 6 --------------------


const normalData = ['nikki','harry', 'potter'];

const [p , ...o]  = normalData;
console.log(p); // ans is nikki  

console.log(typeof(o)); // object 
console.log(typeof(p)); // String 

// 7 --------------


const  getData = ['nikki','bgmi', 'potter'];

const [  ,fps]  = getData; // how to get 2ed data from getData
console.log(fps);


//  8 -------------------
// how to get name without . operator 

const getObject = {name:'nikesh' , age:21 , skill:'JS'}

const {name} = getObject;

console.log(name);


//  9 -----------------

// How to merge 2 Objects

const merge = {name:'Nikki' , age:21 , skill:'React Js'};
const merge_main = {name_1:'Harry' , age_1:21 , skilln:'Node Js'};

const  newMarge  = {...merge , ...merge_main};

console.log( newMarge);

//  10 ----------------

const city = {myCity:'mumbai' , yourCity: 'Up'};

let num_City = {Country:"INDIA"};

// console.log(city , ...num_City);  // there are 2 Diffrent Object are show



//  11 -----------------


let funName =  "Drax";

// console.log(funName());  // funName is not a function 


// 12 ----------------


const result_compare =  false || {} || null;

document.write(result_compare); // object blank

// 13 ---------------

const result_compare_2=  false ||  null  || 'hii';

const result_compare_3 =  false || '' || null;

console.log(result_compare_3 , result_compare_2);  // null


//  14 ------------------

const result_compare_4 =  [] || 0 || true;

console.log(result_compare_4); // []

// 15 -------------

    
  console.log(Promise.resolve(5));  // Promise {<fulfilled>: 5} ans 

//   16 --------------------

   console.log( '❤️' === '😍');    //  false 
   console.log( '❤️' === '❤️');    //  true


//    17 --------------

// JSON.parse();

// what will method will be do 

// A : Parses JSON to a javascript value // Right
// B : Parses a javascript object to json 
// C : Parses any javascript value to JSON 
// D : Parses JSON To a javascript object only

// 18 ----------------------


// let personName = "mafiya";

// function getName() {
//     console.log(personName); // Error

//     let personName = "Jiraya"; 

// }
// getName();

// 19 ------------

let personNum = "mafiya";

function getNum() {
    console.log(personNum); // mafiya

}
getNum();


//  20  -------------------

console.log(`${(x => x)('I Love')} to Program`);










