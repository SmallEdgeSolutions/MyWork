// // //Create an array of movie titles. Loop through the array and each element to the h2.
// // let movieTitle = ['Crow', 'Leviathen', 'Olympus has fallen', 'Gambit']

// // movieTitle.forEach((x, i) => document.querySelector('h2').innerText += movieTitle[i])
// // //Create an array of numbers. Loop through the array and three to each number and replace the old number.

// // let nums = [10, 20, 30]

// // nums.forEach((item, i) => {
// //     nums[i] = item + 3
// // })

// // //Find the average of all the numbers from question two

// // let sum = 0

// // // nums.forEach((num) => sum += num)

// // for (let i = 0; i < nums.length; i++){
// //     sum += nums[i]
// // }

// // console.log( sum / nums.length)

// const pen = {
//     type: "ballpoint",
//     color: "blue",
//     brand: "Bic"
// };

// console.log(pen.type); // ballpoint

// const aurora = {
//     name: "Aurora",
//     health: 150,
//     strength: 25
// };

// console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);

// // Aurora is harmed by an arrow

// aurora.health -= 20;

// // Arora equips a strength necklace

// aurora.strength += 10;

// console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);

// // const aurora = {
// //     name: "Aurora",
// //     health: 150,
// //     strength: 25,
  
// //     // Return the character description
// //     describe() {
// //       return `${this.name} has ${this.health} health points and ${this
// //         .strength} as strength`;
// //     }
// //   }; add to anki about oop methods being called on an object.




// /* 

//     Coding Time
    
//                 */



// const bobbie = {
//     name: "Bobbie",
//     health: 1738,
//     strength: 55,
//     xp: 0,

//     describe() {
//         return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} points`
//     }
// }

// console.log(bobbie.describe())

// /* ------------------------------------------------------------------------------------------- */



// // Modeling a Dog

// const doggo = {
//     name: "Yokai",
//     species: "Doberman",
//     size: "5ft",
    
//     bark() {
//         return "Grrr! Grrr!"
//     }
// }

// console.log(`${doggo.name} is a ${doggo.species} dog measuring ${doggo.size}`);
// console.log(`Look, a cat! ${doggo.name} barks: ${doggo.bark()}`)



// /* ------------------------------------------------------------------------------------------- 



//     Modeling a circle */



// const r = Number(prompt("Enter the circle radius: "))

// const circle = {

//     circumference() {
//         return 2 * Math.PI * r
//     },

//     area(){
//         return Math.PI * Math.pow(r, 2)
//     }
// }

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`)

// /* ------------------------------------------------------------------------------------------- 



//     Modeling a bank account */

//     const account = {
//         name: "Alex",
//         balance: 0,
        
//         credit(){
//             return account.balance + 250 - 80
//         },
        
//         describe(accounting){
//             return `owner: ${account.name}, balance ${account.credit()}`
//         }
//     }

//     console.log(`owner: ${account.name}, balance ${account.balance}`)
//     console.log(`owner: ${account.name}, balance ${account.describe()}`)


//     /* ----------------------------------------------------
    
    
//         Arrays 
    
    
//     --------------------------------------- */





// const movies = ["The Wolf of Wall Street", "Zootopia", "Babysitting"];
// for (const movie of movies) {
//     console.log(movie);
// };


// let musketeers = ["Athos", "Porthos", "Aramis"]

// // for (let i = 0; i < musketeers.length; i++) {
// //     console.log(musketeers[i])
// // }

// musketeers.unshift("D'Artagnan")

// musketeers.forEach(musketeers => {
//     console.log(musketeers)
// })

// musketeers.pop();

// for (const musketeer of musketeers) {
//     console.log(musketeer)
// }



/* const values = [3, 11, 7, 2, 9, 10]
let sum = 0; Needed to be globally declared

for (let i = 0; i < values.length; i++) {
   console.log(values[i]) this for loop grabs the numbers out of the array.
   sum = sum + values[i] this grabs the number and adds it to the globally scoped sum
}

console.log(sum) this prints the sum of the array The End*/

// const monthList = "Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec"
// const months = monthList.split(", ")

// console.log(months[0])
// console.log(months[10])

const word = "bird"
console.log(word.length)

let lowerCaseWord = console.log(word.toLowerCase())

let upperCaseWord = console.log(word.toUpperCase().split())

console.log(upperCaseWord.indexOf("A, E, I, O, U"))
