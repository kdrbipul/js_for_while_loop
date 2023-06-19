let count = 0;
while(count<5){
    console.log("count : "+count);
    count ++;
}

// difference between for loop and a while loop

for (let i = 1; i <=5; i++){
    console.log("For loop: "+i);
}

let i = 1;
while(i<=5){
    console.log("While loop: "+i);
    i++;
}

// do while loop


// let count1 = 1;
// do {
//     console.log("count: "+count1);
//     count1++;
// }while(count1<=5);


// let userInput;
// do {
//     userInput = prompt("Enter a number greater than 10,");
// }while(parseInt(userInput<=10));
// console.log("You entered a number greater than 10.");



// for...in


const person ={
    name : "Abdul Kader",
    age : 24,
    Profession : "Web Designer",
};
for (let key in person){
    console.log(key + " : " + person[key]);
}

const arrayLike = {
    1 : "Apple",
    2 : "Banana",
    3 : "Cherry",
    length : 3,
}
for (let index in arrayLike){
    console.log(arrayLike[index]);
}




//for ...in end


//for .....of 

const numbers = [1,2,3,4,5];
for(let number of numbers){
    console.log(number);
}

const message = "Hello";
for (let character of message){
    console.log(character);
}