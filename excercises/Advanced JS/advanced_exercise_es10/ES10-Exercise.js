// Solve the below questions:

// #1 Turn this array into a new array: [1,2,3,[4],[5]]. Bonus if you can do it on one line
const array = [[1],[2],[3],[[[4]]],[[[5]]]]
const array2 = array.flat(2)
console.log(array2)


// #2 Turn this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const greeting2 = greeting.flat()
console.log(greeting2)


//#3 Turn the greeting array above into a string: 'Hello young grasshopper you are learning fast!'
let mygreet = greeting.flatMap(value => value.join(" ")).join(' ')
console.log(mygreet)


//#4 Turn the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
const trapped2 = trapped.flat(50)
console.log(trapped2)



//#5 Clean up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
const cleaned = userEmail3.trimStart().trimEnd()
console.log(cleaned)


//#6 Turn the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 }
const entr = Object.entries(users)
console.log(entr)

//#7 change the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]
const entr2 = Object.entries(users).map(users => [users[0], users[1]*2])
console.log(entr2)

//#8 change the output array of question #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }
const back = Object.fromEntries(entr2)
console.log(back)