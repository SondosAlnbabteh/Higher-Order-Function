//*************************** Ex1 */ 
// ******************for**************
let arr = [1, 2, 3];

function power(arr){

    for(let x=0; x<arr.length; x++){ 

         arr[x] = (2) ** arr[x];

    }

    console.log("for..........");
    console.log(arr);
   
}

power(arr);

//********************forEach*************** 

let arr2 = [1, 2, 3];
cunte = 0;
arr2.forEach( function(){

    arr2[cunte] = 2 ** arr2[cunte];
    cunte++;

}); 

console.log("forEach..........");
console.log(arr2);



//*******************map************ */

let arr3 = [1, 2, 3];

let newArr3 = arr3.map(function(num){

    return 2 ** num;
});

console.log("map..........");
console.log(newArr3);

//*********************Ex2 */ 

let mapArr = [1, 2, 3, "Rawan"];

let newMapArr = mapArr.map(function(num){
    
    if( typeof(num) !== "number" ){

        return "N/A";

    }else if( num%2 !== 0){

        return "odd";

    }else if( num%2 === 0 ){

        return "even";

    }
});

console.log(newMapArr);

//*********************Ex3 */

let names =   ["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"];

names.forEach(function(name){
     
     console.log(name);

});

//*********************Ex4 */
let nums = [3, 5, 6, 4, 30, 10, 9, 2 ,15];
let fizzbuzz = nums.map(function(num){

    if( num%3 == 0 && num%5 == 0) {

        return "Fizz Buzz";

    }else if( num%5 == 0){

        return "Buzz";

    }else if(num%3 == 0) {

        return "Fizz";
        
    }else{
            
         return num;
    }
});

console.log(fizzbuzz);
