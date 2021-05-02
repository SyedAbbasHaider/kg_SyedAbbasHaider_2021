var myarg = process.argv.slice(2);

//let text = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
console.log('myarg: ', myarg);
// console.log('first arg is: ', myarg[0]);
// console.log(text[0]);

console.log(typeof(myarg[0]));

let length = myarg.length;
//console.log(length);



let map = new Map([
    ['0', 'zero'],
    ['1', 'one'],
    ['2', 'two'],
    ['3', 'three'],
    ['4', 'four'],
    ['5', 'five'],
    ['6', 'six'],
    ['7', 'seven'],
    ['8', 'eight'],
    ['9', 'nine'],
]);

for (let i = 0; i < myarg.length; i++) {
    if (map.has(myarg[i])) {
        if (myarg[i] > 9) {
            
        }
        console.log(map.get(myarg[i]))
    }
}

// if (map.has(myarg[0])) {
//     console.log(map.get(myarg[0]))
// }

