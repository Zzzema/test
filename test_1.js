
//Get the strings
function askStrings(){
    first = prompt('First Number', 0);
    second = prompt('Second number', 0);
    return [first, second];
}

function main(string1, string2){
    let result = '';
    let singlStr = '';
    for(let index = string2.length - 1; index > -1; index--){
        //console.log(string1, string2[index], string2.length - index - 1);
        singlStr = stringByElement(string1, string2[index], string2.length - index - 1);
        result = summ(result, singlStr);
        //console.log(result);
    }
    return result;
} 

let x = askStrings();
alert(main(x[0], x[1]));


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

//Summ two elements plus residue value of previous operations then call nummSeparate function, and return the array.
function summSingle(x = 0, y = 0, accumulator = 0){
    //console.log(+x + +y + accumulator);
    return numSeparate(+x + +y + accumulator);
}


//Return a summ  of two strings.
function summ(first, second){
    first = first.split('');//convert the strings into the arrays
    second = second.split('');
    let summ = '';
    let len = (first.length > second.length) ? first.length : second.length;//Take the biggest array's value for circle.
    //console.log(first);
    //console.log(second);
    //console.log(len, first.length, second.length);
    let summArray;
    let accumulator = 0;
    for (;len > 0; len--){
        summArray = summSingle(first.pop(), second.pop(), accumulator);
        accumulator = summArray[0];//residue value
        summ = summArray[1] + summ;//result string
        //console.log(summ);
    }   
    return summ;
}





//1. Take 2 strings.
//2. Multiply each element of the first string by the second string.
//2.1 Take an element of the ferst string and take element of the sekondstring, and multiplay.
//2.2 Made a ceparation of the multiply's result on two elements, the function must retern array where the first element goes to accumulator
//ant second goes to multiplyElementsResult.
//3.multip
