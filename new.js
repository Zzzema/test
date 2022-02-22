//const bigNum = 1.7976931348623157e+308;
//const bigNumDev = 1.9974368165136842e+307
//console.log(bigNum/9);
let y = '1000124';
let x = '30001';


//Take elemrnts 
function multiplySingle(firstElement, secondElement, accumulator){
    return numSeparate(+firstElement * +secondElement + accumulator);
}
//first goes to accumulator, second to summ
function numSeparate(numb){
    let second = numb % 10;
    let first = Math.trunc(numb/10);
    return [first, second];

}
// Addind zeros to the end of the string and return the string.
function zeros(string, index){
    return string.padEnd(string.length + +index, '0');
}


//Take the first string and multiplay on an element of the second string, and also index of the element,
// and return result multiplyed on 1 with as zeros as index.
function stringByElement(string, element, index){
    let accumulator = 0;
    let result = '';
    for(let indexString = string.length - 1; indexString > -1; indexString--){
        let resultAfter = multiplySingle(string[indexString], element, accumulator);
        accumulator = resultAfter[0];
        result =  resultAfter[1] + result;
    }
    result = (accumulator) ? (accumulator + result) : result;
    return zeros(result, index);
} 

console.log(stringByElement('12', '4', 0));


