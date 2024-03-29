
//  how to sum the array

const arr = [1,2,3,4,5];

console.log(arr.reduce( (index , iq) => {
   return  index * 3
}));

//  const tagValue = document.querySelector('.mainData')

// function name(params) {

//     try {
        
//          fetch('https://jsonplaceholder.typicode.com/posts/').then((data)=> data.json())

//     .then( (main) => {
//          console.log(main.title);
    
//         for (let index = 0; index <= 10; index++) {

//          console.log(main.title);

    
//             document.querySelector('.mainData').innerHTML += `
//                                         <div>
//                                            <h1>
//                                               ${main[0].title}
//                                            </h1>
//                                         </div>
//                             `
//                 }
//             })
//         } catch (error) {
//             console.log(error);
//         }

// }


// name()


const url = "https://jsonplaceholder.typicode.com/posts";

    async function data(){
      try {
        const fetchData = await fetch(url);
        const response = await fetchData.json();

        for(let a = 0; a <= 10; a++){
            console.log(response[a]);
            document.querySelector('#show__data').innerHTML += `

                <h1>
                ${response[a].title}</h1>
            `
        }
        
      } catch (error) {
        console.log(error);
        
      }
    }
    data()