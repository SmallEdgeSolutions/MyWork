// //Create an array of movie titles. Loop through the array and each element to the h2.
// let movieTitle = ['Crow', 'Leviathen', 'Olympus has fallen', 'Gambit']

// movieTitle.forEach((x, i) => document.querySelector('h2').innerText += movieTitle[i])
// //Create an array of numbers. Loop through the array and three to each number and replace the old number.

// let nums = [10, 20, 30]

// nums.forEach((item, i) => {
//     nums[i] = item + 3
// })

// //Find the average of all the numbers from question two

// let sum = 0

// // nums.forEach((num) => sum += num)

// for (let i = 0; i < nums.length; i++){
//     sum += nums[i]
// }

// console.log( sum / nums.length)

const pen = {
    type: "ballpoint",
    color: "blue",
    brand: "Bic"
};

console.log(pen.type); // ballpoint

const aurora = {
    name: "Aurora",
    health: 150,
    strength: 25
};

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);

// Aurora is harmed by an arrow

aurora.health -= 20;

// Arora equips a strength necklace

aurora.strength += 10;

console.log(`${aurora.name} has ${aurora.health} health points and ${aurora.strength} as strength`);

// const aurora = {
//     name: "Aurora",
//     health: 150,
//     strength: 25,
  
//     // Return the character description
//     describe() {
//       return `${this.name} has ${this.health} health points and ${this
//         .strength} as strength`;
//     }
//   }; add to anki about oop methods being called on an object.




/* 

    Coding Time
    
                */



const bobbie = {
    name: "Bobbie",
    health: 1738,
    strength: 55,
    xp: 0,

    describe() {
        return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} points`
    }
}