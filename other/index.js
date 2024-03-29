//  lecture - Function 
//  this is a basic 

let num = 100;
let num1 = 0;

function  newWork( apple , orange)  {
        // console.log();

        const fruitJuice = `this ia a Apple ${apple} and This ia A mango ${orange}`;

        console.log(fruitJuice);
         
        return fruitJuice;  // with out return this is work proper

}

newWork(num ,num1)

const declare = newWork(10 , 15) // this is work peoper no errors

 console.log(declare);  // same work by line number 25


//   Function Declarations

const birthData = birthInfo(2001);

 console.log(birthData);   // work proper ans is 22 its my age 


   function birthInfo(birthYear) {
    return 2023 - birthYear;
}


// this Function not working proper 
// ERRORS -- birthInfo is not defind

// const birthMain =  function birthInfo(birthYear) {
//     return 2023 - birthYear;
// }


// function Expresssions

//   work proper ans is 23 its my age 

   const myAge = (nikki) => {
        return nikki - 2002
   }

   const expressAge = myAge(2025);

   console.log(expressAge);