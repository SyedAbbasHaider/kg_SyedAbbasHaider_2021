var myArg = process.argv.slice(2);

var result = [];


let map = new Map([
    ['0', 'Zero'],
    ['1', 'One'],
    ['2', 'Two'],
    ['3', 'Three'],
    ['4', 'Four'],
    ['5', 'Five'],
    ['6', 'Six'],
    ['7', 'Seven'],
    ['8', 'Eight'],
    ['9', 'Nine'],
]);

for (let i = 0; i < myArg.length; i++) {
    var myChar = myArg[i].split('');
    var fResult = "";
    for (let j = 0; j < myChar.length; j++) {
        if (map.has(myChar[j])) {
            var output = map.get(myChar[j]);
            var fResult = fResult.concat(output) 
        }
    }
    result.push(fResult);
}

 console.log(result.join(', '))

