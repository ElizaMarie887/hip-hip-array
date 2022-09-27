/* This assignment will give you some practice with creating arrays and using their methods. */


console.log("Challenge 1");
// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
    'Tre',
    'Sonny',
    'Crystal',
    'Ilyas',
    'Greg',
    'Fernando',
    'Timothy',
    'Patrick',
    'Steve',
    'Jimothy',
    'Pat',
    'Arnold',
    'Andy'
  ];
  // Challenge 1 Code
let i1 = 0;

while(i1 < students.length){
  console.log(students[i1]);
  i1++;
}

  console.log("\n");
  console.log("Challenge 2");
  // Challenge 2
  // Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
  const grades = [100, 80, 110, 75, 83, 64];
  //Challenge 2 Code

let i2 = 0;
let reversegrade = grades.reverse();
while(i2 <reversegrade.length){
  console.log(reversegrade[i2]);
  i2++;
}


  console.log("\n");
  console.log("Challenge 3");
  // Challenge 3
  // Console.log out only the even numbers in the following array.
  const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
  // Challenge 3 Code

let i3 = 0

while(i3 < positiveNumbers.length){
    if (positiveNumbers[i3] % 2 == 0){
      console.log(positiveNumbers[i3])
 }
    i3++
}
  
 
  console.log("\n");
  console.log("Challenge 4");
  // Challenge 4
  // Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
  const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

  // Challenge 4 Code
let i4 = 0;

while(i4 < mixedSignNumbers.length){
  if (mixedSignNumbers[i4] % 2 == 0){
    console.log(mixedSignNumbers[i4])
}
  i4++
}  


  console.log("\n");
  console.log("Challenge 5");
  // Challenge 5
  // Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
  const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
  // Challenge 5 Code
let i5 = 0;

symmetricalCapitals.shift();
symmetricalCapitals.shift();
symmetricalCapitals.pop();

while(i5 < symmetricalCapitals.length){
  console.log(symmetricalCapitals[i5]);
  i5++;
}

console.log

  console.log("\n");
  console.log("Challenge 6");
  // Challenge 6
  // Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
  const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
  // Challenge 6 Code
  let i6 = 0

  fibonacciNumbers.unshift(0);
  fibonacciNumbers.push(21, 34);

  while(i6 < fibonacciNumbers.length){
    console.log(fibonacciNumbers[i6]);
    i6++;
  }
  


  console.log("\n");
  console.log("Challenge 7");
  // Challenge 7
  // Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
  // Challenge 7 Code

let newArray = [11, 9, 14, 6, 35];
let i7 = 0;

while(i7 < newArray.length){
  console.log(newArray[i7]);
  i7++;
}



  console.log("\n");
  console.log("Challenge 8");
  // Challenge 8
  // Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.
  const emptyArray = [];
  // Challenge 8 Code
let i8 = 0;
let myEmptyArray = [];

myEmptyArray.push("l");
myEmptyArray.push("i");
myEmptyArray.push("z");
myEmptyArray.push("a");
myEmptyArray.unshift("E");

while(i8 < myEmptyArray.length){
  console.log(myEmptyArray[i8]);
  i8++;
}

  console.log("\n");
  console.log("Challenge 9");
  // Challenge 9
  // Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.
  // Challenge 9 Code
  let i9 = 3;
 
  while( i9 < 11){
    console.log(students[i9]);
    i9++;
  }
  
  console.log("\n");
  console.log("Challenge 10");
  // Challenge 10
  // Loop through the `students` array from Challenge 1, making a COPY of the array , starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.
  // Do NOT use slice, you will be using that for the next challenge!
  // Challenge 10 Code

let studentCopy = [];

let i10 = 3;
let i10a = 0
while(i10 < 11){
  studentCopy.push(students[i10])
  i10++;
}

while(i10a < studentCopy.length){
  console.log(studentCopy[i10a]);
  i10a++;
}

  console.log("\n");
  console.log("Challenge 11");
  // Challenge 11
  // Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.
  // Challenge 11 Code
  
myStudents2 = students.slice(3,11)
let i11 = 0
let i11a = 0
console.log("Array slice")
while(i11 < myStudents2.length){
  console.log(myStudents2[i11])
  i11++
}
console.log("Original Array")
while(i11a < students.length){
  console.log(students[i11a])
  i11a++
}


  console.log("\n");
  console.log("Challenge 12");
  // Challenge 12
  // Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
  const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']
  // Challenge 12 Code

let myDinos = dinosaurs.splice(4,3)  
let i12 = 0

while(i12 < dinosaurs.length){
  console.log(dinosaurs[i12])
  i12++
}
  
  
  console.log("\n");
  console.log("Challenge 13");
  // Challenge 13
  // Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
  // Challenge 13 Code

let newDinoString = dinosaurs.join("*")
console.log(newDinoString)

  
  console.log("\n");

  console.log("Challenge 14");
  // Challenge 14
  // Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.
  // Challenge 14 Code

let i14 = 0
let reversedino = dinosaurs.reverse()

while(i14 < reversedino.length){
  console.log(reversedino[i14])
  i14++
}

  
  console.log("\n");
  console.log("Challenge 15");
  // Challenge 15
  // Create two new arrays.
  // Use .concat to combine those two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
  // Challenge 15 Code

let myNewArray1 = ["Hayden", "Abigail", "Alexavier", "Jocelyn", "Floof", "Nyx"]
let myNewArray2 = [14, 11, 9, 6, 3, 0]
let i15a = 0
let i15b = 0
let i15c = 0
combineArray = myNewArray1.concat(myNewArray2)
console.log("New Array")

while(i15a < combineArray.length){
  console.log(combineArray[i15a])
  i15a++
}
console.log("Original Array 1")
while(i15b < myNewArray1.length){
  console.log(myNewArray1[i15b])
  i15b++
}
console.log("Original Array 2")
while(i15c < myNewArray2.length){
  console.log(myNewArray2[i15c])
  i15c++
}