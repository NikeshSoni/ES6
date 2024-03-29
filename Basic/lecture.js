
// 1 -----------------

//  output should be 6

function sum(x , y , z) {
    return x + y+ z 
}

console.log(sum(...[1,2,3])); // right

//  A : sum([...1,2,3]) 
// B : sum(...[1,2,3]) 
//  C : sum([...[1,2,3]])


// 2 --------------

const notCompare = 'hii i am nikesh';

console.log(!typeof notCompare === 'object'); // false 
console.log(!typeof notCompare === 'string'); // false
console.log(!typeof notCompare === false); // true

// 3 --------------------

const sumName = "Gamer";
const num = 21;

console.log(isNaN(sumName)); // true
console.log(isNaN(num)); // false

// 4 -----------------

const personData = {name:"Hanuman"}

//  what can Modify personData object

// Object.seal(personData);  
// personData.age =  21;

//  whan we use seal we not add any key and value  only update present value

personData.name= "Nikki"; // This is right

console.log(personData);

// 5 -------------------

//  how to romove 1st element 

const remove_element = [2,8,6,0];

remove_element.shift();
//  const getlast = remove_element.pop();  // remove 1st value


console.log(remove_element);

//  6 -------------

//  how to remove Last Element

const remove_last = [2, 8 , 6 , 0 ];

 const hii = remove_last.slice(-1); // get last value 

// remove_last.splice(0 , -1);

console.log(hii);
// console.log(getlast);


//  7 ----------------

//  chek any value is odd and Even 

const oddType = 31 ;
const even = 30;

console.log(oddType % 2);  // this is odd
console.log(even % 2);  // this is a even


const myName_1 = 9;

console.log(myName_1.toString());

//  8 ----------------------

const dataName = {name:'anil'}

const del = delete dataName.name;
console.log(del); // blank object 

//  9 ---------------

const changeType = 'true';
const changeWork = 'true';

console.log( !changeWork);  // false 

console.log(typeof changeType); // string 

//  i whant to change the type of {Changetype}

console.log(typeof !changeType); // boolean 



// 10 ----------------------

const changeVal = 'true';

//  how to convert type  {change val } true to {boolean}

const converting = !!changeVal;

console.log(typeof(converting));
 