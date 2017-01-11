/**
 * Created by nipun on 1/2/17.
 */

var lastname, lastName;
lastName = "Doe";
lastname = "Peterson";

console.log(lastname);

console.log(lastName);

a = 5; b = 6; c = a + b;

console.log(c);

a='Nipun'
b="Chawla"
d=11
c=a+b+d

console.log(c);

var carName;
carName="volvo";

console.log(carName);

var carName;
console.log("redefined variable name "+carName);

var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();
console.log(fruits);

fruits.reverse();
var somesom=[1,3,4,5,5]
console.log(fruits);
console.log(somesom.reverse())
// var text=get('http://www.omdbapi.com/?s=maze')
// console.log(text)


// function Node(data) {
//     this.data = data;
//     this.next = null;
// }
//
// function SinglyList() {
//     this._length = 0;
//     this.head = null;
// }
//
// SinglyList.prototyp.add=  function (value) {
//     var node = new Node(value),
//         currentNode = this.head;
//     // 1st use-case: an empty list
//     if (!currentNode) {
//         this.head = node;
//         this._length++;
//
//         return node;
//     }
//     while (currentNode.next) {
//         currentNode = currentNode.next;
//     }
//
//     currentNode.next = node;
//
//     this._length++;
//
//     return node;
//
// }
//



var myStack = [];

//push
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack)
//pop
myStack.pop(); //3
myStack.pop(); //2
myStack.pop(); //1



var myQueue = [];

//push
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);

//pop
myQueue.shift(); //1
myQueue.shift(); //2
console.log(myQueue);
myQueue.shift(); //3

main = function (args) {
    console.info("This is nipun");
};


// var HelloWorld = (function () {
//     function HelloWorld() {
//     }
//     HelloWorld.main = function (args) {
//         console.log("This is nipun chawla");
//     };
//     return HelloWorld;
// }());
//
// console.log(HelloWorld.main(2));
//
// var function1= (function () {
//
//     return function1();
//
//     var nipun=function () {
//         console.log("this variable is nipun");
//     };
// })
//
// console.log(function1.nip);

var HelloWorld = (function () {
    function HelloWorld() {
        console.log("issss");
    }
    HelloWorld.print = function () {
        console.log("hwala");
    };
    return HelloWorld;
}());

HelloWorld.print();


var Solution=(function () {
    function Solution() {

    }
    Solution.question1=function () {
        console.log("hell no");
    }
}());

function printObject(object) {
    console.log(object)

}
//create an object
var myObject = new Object();

myObject.type='fiat';
myObject.color='blue';

printObject(myObject);

function displayInformation() {
    // var library is defined, use it to print the information
    for(var i=0;i<library.length;i++){
        if (library[i].readingStatus==false)
            console.log("You still need to read "+library[i].title+ " by " +library[i].author);
        else{
            console.log("Already read "+library[i].title+ " by " +library[i].author);
        }
    }
}
//json object
var library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

displayInformation();

function sortLibrary() {
    // var library is defined, use it in your code
    // use console.log(library) to output the sorted library data
    library.sort(function (obj1,obj2) {
        return obj1.title>obj2.title;
    });
    console.log(library);
}

// tail starts here
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        libraryID: 1254
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        libraryID: 4264
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        libraryID: 3245
    }
];

sortLibrary();

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a-b});

console.log(points);


console.log(2333);

var Persons= new Array("Bucky","Tommy","Sarah",'MoneyT');


console.log(Persons);

// array is also an object so it would have properties(length and methods(eg: concat())

var teachers=new Array("Bob","Marley");

var students= new Array("Nipun", "Ravi");

console.log(teachers.length);

var members=teachers.concat(students);

console.log(members);



function processData(myArray) {
    console.log(myArray);
}


// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";

//  on the input from standart input take the data and add it to the concat/string input
// process.stdin.on("data", function (input) {
//     _input += input;
// });
// process.stdin.on("end", function () {
//     console.log("executing end")
//     processData(_input.split('\n')[1].split(' ').map(Number));
// });

var arr= new Array("tim",2,3);

arr.map(processData) // calls processData on every element

incrementByOne = function (element) {
    return element + 1;
}

myArray = [1,2,3,4];

result=myArray.map(incrementByOne); // returns [2,3,4,5]

console.log(result);

myArray = [1,2,3,4];


myArray.forEach(incrementByOne); // does not return a new array

console.log(myArray);


function processData(myArray) {
    var n=2;
    var newArr=myArray;
    //newArr.sort();
    console.log(newArr);
    for (var i=myArray.length-1 ;i>0;i--){
        if (myArray[i]>myArray[i-1]) n--;
        if (n==0) console.log(myArray[i]);
    }
}

var myArray=[2, 3, 6, 6, 5]
processData(myArray);

function highest(){
    return [].slice.call(arguments).sort(function(a,b){
        return b - a;
    });
}
newele=highest(1, 1, 2, 3);
console.log();

function processData(myArray) {
    //myArray.sort();
    var high=myArray.length-1;
    var k=2;
    while(k>1 && high>0){
        if(myArray[high]==myArray[high-1]){
            high=high;
        }
        high--;
    }
    console.log(myArray[high]);
}

var myArray=[2, 3, 6, 6, 5];

processData(myArray);

var word = new String("hello");
word.length; //=> 5
word[0]; // => "h"
word.split(""); //=> ["h", "e", "l", "l", "o"]
word.toUpperCase(); //=> "HELLO"

//One cool thing, Javascript gives you the ability to treat primitive data types as object. Let’s take a primitive string:



//Conceptually, these are two totally different things. They’re not the same type,
// as per my original confusion one is a string and one is an object.
// Objects can have additional properties, so those two variables shouldn’t be equal because they’re not.
var greeting = "hello";
var word = new String("hello");
console.log(word == greeting); //=> true // same primitive types
console.log(word === greeting); //=> false // but not same objects
//word == greeting; It will return true as the values are same
//word === greeting; It will return false as word will be object and greeting will be string

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

console.log(Symbol("foo") === Symbol("foo")); // false
// var sym = new Symbol(); // TypeError
var sym = Symbol("foo");

var type=typeof sym;     // "symbol"
console.log(type);
var symObj = Object(sym);
console.log(symObj);

console.log(typeof symObj);  // "object"

//Object

//An object is a collection of properties. The properties are identified by using key values. Property keys are used to access the properties and their values.
//Object properties are written as key:value pairs separated by commas.

var car = {color:"black", model:"X", mileage:30};




console.log(typeof car);


// squareFunction = function (n) {
//     return n*n;
// }

squareFunction = n=>n*n;
var numbers= [1,2,3,4,5,67,8]

squaredNumbers=numbers.map(squareFunction);
console.log(squaredNumbers);

var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

evenfunction=function (n) {
    if ((n%2) ==0)
    return n;

}
evenFilter=  (n) =>((n%2) ==0) ;
var evenDigits= digits.map(evenfunction);
console.log(evenDigits)

evenFilter2= (n) =>((n%2) ==0) ;

var evenDigits2=digits.filter(evenFilter) // var even_digits2 = digits.filter( num => num % 2 === 0 );
console.log(evenDigits2)

var names = [ "Hacker", "Rank", "Website" ];
var names_length = names.map( name => name.length );
console.log(names_length)

var names_length = names.filter( name => name.length > 4 ); // filters elements with length greater than 4

console.log(names_length);




var my_function = (some_array) => some_array.map( (item) => item % 2 === 0? ++item: --item); // increment even umbers by 1 and odd decremnt
// by one



console.log(my_function(numbers));

// new features and templates in ES6

function varScope() {
    var num1 = 31;
    if (num1 % 2 == 1) {
        var num1 = 32;  // same variable, num.
        console.log(num1);  // 32
    }
    console.log(num1);  // 32
}

function letScope() {
    let num2 = 31;
    if (num2 % 2 == 1) {
        let num2 = 32;  // different variable, num.
        console.log(num2);  // 32
    }
    console.log(num2);  // 31
}

console.log("Output using varScope() :");
varScope();
console.log("");
console.log("Output using letScope() :");
letScope();


numbers.forEach(function (value) {
    console.log(value);
});

words="hahshshhaksiwueuuewqoqqknan"
var uniqueWords = new Set(words);


//key value in a set or a map
for (var [k,v] of uniqueWords.entries()){
    console.log(k);
}
console.log(uniqueWords.entries());

phoneBookMap=[
    "N1",
    "R2"
]
for (var [key, value] of phoneBookMap) {
    console.log(key + "'s phone number is: " + value);
}

//NaN
NaN === NaN;        // false
Number.NaN === NaN; // false
isNaN(NaN);         // true
isNaN(Number.NaN);  // true

function valueIsNaN(v) { return v !== v; }
valueIsNaN(1);          // false
valueIsNaN(NaN);        // true
valueIsNaN(Number.NaN); // true


// for–of is designed to be the workhorse loop statement you use with all of them.

//for–of does not work with plain old Objects, but if you want to iterate over an object’s properties
// you can either use for–in (that’s what it’s for) or the builtin Object.keys():

someObject={1:"Nipun",2:"chawla"}
// dump an object's own enumerable properties to the console
for (var key of Object.keys(someObject)) {
    console.log(key + ": " + someObject[key]);
}
//Arrays, Maps, Sets, and the other objects we talked about all have in common is that they have an iterator method.

//Just as you can add a myObject.toString() method to any object and
// suddenly JS knows how to convert that object to a string, you can add the myObject[Symbol.iterator]() method to any object and
// suddenly JS will know how to loop over that object.
//For example, suppose you’re using jQuery, and although you’re very fond of .each(),
// you would like jQuery objects to work with for–of as well. Here’s how to do that:


// Since jQuery objects are array-like,
// give them the same iterator method Arrays have
//jQuery.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

console.log(someObject.toString());

var fn=()=> console.log("HelloWorld");
console.log(fn());

var fn=(a,b)=> a+b;
console.log(fn(3,4));

var fn=a=> a+5; // only when one arg then only we do not need ()

setTimeout(()=>console.log("Hello after one sec"),1000); //async

console.log(this);


//typed array
//A TypedArray object describes an array-like view of an underlying binary data buffer.
// Setting and getting using standard array syntax
var int16 = new Int16Array(2);
int16[0] = 42;
console.log(int16[0]); // 42

// Indexed properties on prototypes are not consulted (Fx 25)
Int8Array.prototype[20] = "foo";
(new Int8Array(32))[20]; // 0
// even when out of bound
Int8Array.prototype[20] = "foo";
(new Int8Array(8))[20]; // undefined
// or with negative integers
Int8Array.prototype[-1] = "foo";
(new Int8Array(8))[-1]; // undefined

// Named properties are allowed, though (Fx 30)
Int8Array.prototype.foo = "bar";
(new Int8Array(32)).foo; // "bar"


var myArray = [24, true, 'Hello World'];

// hetrogenous array
var theObject = new Object();
var myArray = [
    45,
    true,
    'Hello',
    theObject
];
console.log("herere");
 /// for ..in
for (var index in myArray){ // gives an index and not value ; you will have to destructure the array
    console.log("First: Values from the array "+myArray[index]);
}
// for .. of
for (var index in myArray){ // Note : gives an index iff the values are heterogeneous and not value ; you will have to destructure the array
    console.log("Second: from the array "+myArray[index]);
}

// for .. each
var a = ["a", "b", "c"];

myArray.forEach(function(element) { // gives values directly to iterate over
    console.log("Third "+element);
});

var employee = ['001', '002', '003', '004', '005', '006', '007'];
'use strict';
for(let i in employee){
    console.log(i);
}
console.log();
for(let i of employee){
    console.log(i);
}
//The for...of statement creates a loop iterating over iterable objects like arrays, maps, and argument objects.
// It invokes a custom iteration hook with statements to be executed for the value of each distinct property.

// Reverse a string in place
//As long as you're dealing with simple ASCII characters, and you're happy to use built-in functions, this will work:

function reverse(s){
    return s.split("").reverse().join("");
}

rev=reverse("nipun");
console.log(rev);


'use strict';

//palindrome check
// function rev(input){
//     return input.split('').reverse().join("");
// }
// for (var element of my_array){
//     if ((element) === rev(element)){
//         console.log(element);
//     }
// }


function isUnique(unique) {
    hashset= new Set(unique);
    console.log(hashset.length==unique.length);
}

isUnique("Stringwithduplicates");

function get(k){
    if (mapStructure[k]===undefined){
        // if key not present either insert it
        console.log(k+ " not present");
    }
    return mapStructure[k];
}

var mapStructure = {"key1":1,"key2":1}



console.log("looking into map value is"+ get('key2'))


var myMap = new Map();
myMap.set(0, "zero");
myMap.set(1, "one");
for (var [key, value] of myMap) {
    console.log(key + " = " + value);
}

for (var key of myMap.keys()) {
    console.log(key);
}

for (var value of myMap.values()) {
    console.log(value);
}
console.log(myMap.has(2))

console.log(myMap.delete('foo'))
console.log(myMap.size)
myMap.clear();
console.log(myMap.size)

//weak map
const cache = new WeakMap();
function countOwnKeys(obj) {
    if (cache.has(obj)) {
        console.log('Cached');
        return cache.get(obj);
    } else {
        console.log('Computed');
        const count = Object.keys(obj).length;
        cache.set(obj, count);
        return count;
    }
}
const obj = { foo: 1, bar: 2};
console.log(countOwnKeys(obj))
//Computed

console.log(countOwnKeys(obj))
//Cached
//2

const newset = new Set().add('red').add('green').add('blue');


const set = new Set(['red', 'green', 'blue']);
for (const x of set) {
    console.log(x);
}
//In contrast to Arrays, Sets don’t have the methods map() and filter().
// A work-around is to convert them to Arrays and back.


const myset = new Set([1, 2, 3]);
newmysetset = new Set([...myset].map(x => x * 2));
console.log(newmysetset)
// Resulting Set: {2, 4, 6}
// Filtering:
const allset = new Set([1, 2, 3, 4, 5]);
filteredset = new Set([...allset].filter(x => (x % 2) == 0));
// Resulting Set: {2, 4}

const aa = new Set([1,2,3]);
const bb = new Set([4,3,2]);
const union = new Set([...aa, ...bb]);
console.log(union)

//ntersection (a ∩ b): create a Set that contains those elements of Set a that are also in Set b.

const ai = new Set([1,2,3]);
const bi = new Set([4,3,2]);
const intersection = new Set(
    [...ai].filter(x => bi.has(x)));
// {2,3}
console.log(intersection)

//Set.prototype.entries() : Iterable<[any,any]>
//Set.prototype.keys() : Iterable<any>
const aaset = new Set(['a', 'b', 'c']);
const map = new Map(aaset.entries());
// Map { 'a' => 'a', 'b' => 'b', 'c' => 'c' }

//The following two methods only exist so that the interface of Sets is similar to the interface of Maps.
    //Each Set element is handled as if it were a Map entry whose key and value are the element.


//A WeakSet is a Set that doesn’t prevent its elements from being garbage-collected. Consult the section on WeakMap for an explanation of why WeakSets don’t allow iteration, looping and clearing.

//read about proxies
// const _proxies = new WeakSet();
//
// function createProxy(obj) {
//     const proxy = (...);
//     _proxies.add(proxy);
//     return proxy;
// }
//
// function isProxy(obj) {
//     return _proxies.has(obj);
// }


/*
 Spreading into function and method calls

 */
//Spread functions / operator and it's usage
//Math.max(x1, x2, ···) returns the argument whose value is greatest.
// It accepts an arbitrary number of arguments, but can’t be applied to Arrays.

result=Math.max(...[-1, 5, 11, 3])

console.log(result)


// try to find the 2nd max element
//1st approach
anArray=[2,4,6,6,10,9,8,10]
anArray.sort(function (a,b) {
    return a>=b;
})
console.log(anArray) //
secondMax= new Set(anArray)
legthofSecondMaxSet=secondMax.size
console.log("length of secondmax set"+legthofSecondMaxSet)
console.log("entried is secondMax set" +  [...secondMax.entries()][secondMax.size-2][0])
secondMaxMap=[...new Map(secondMax.entries())] // to convert a set to a map to be able to perform operations on the map
console.log(secondMaxMap)
finallyfindmax2=[2,4,6,6,10,9,8,10]
finallyfindmax2.sort(function (a,b) {
    return a-b;
})
finallyfindmax2=[2,4,6,6,10,9,8,10]
finallyfindmax2.sort(function (a,b) {
    return a-b;
})
const setmax=new Set(finallyfindmax2)
const setmaxtoarr=[...setmax];
console.log(setmaxtoarr+" what is the element "+setmaxtoarr[setmaxtoarr.length-2]);


//1 12 5 22 200 1000 10
priceOfToys=[1,12,5 ,22,  200 ,1000, 10]

priceOfToys.sort(function (a,b) {
    return a-b;
})
console.log(priceOfToys)
// var pricesSet= new Map(priceOfToys)
var count=0;
var total=50
for (elements of priceOfToys){
    if (elements<total+1){
        count++;
        console.log(total)
        total=total-elements;
    }
}
console.log(count)
//

//  convert an integer array to
myIntegerArray='14 2'.split(' ').map(Number); // [14, 2]`


console.log(myIntegerArray)

//A Map object iterates its elements in insertion order.

var normalmap = new Map();
normalmap.set('2-1', "foo");
normalmap.set('0-1', "bar");
normalmap.set('3-1', "baz");

//According MDN documentation:
///A Map object iterates its elements in insertion order.
//    You could do it this way:

// Another example is JavaScript not having a way to destructively append the elements of one Array to another one.
// However, Arrays do have the method push(x1, x2, ···), which appends all of its arguments to its receiver.
// The following code shows how you can use push() to append the elements of arr2 to arr1.

/*
Converting iterable or Array-like objects to Arrays
 */
const arr1 = ['a', 'b'];
const arr2 = ['c', 'd'];

arr1.push(...arr2);
// arr1 is now ['a', 'b', 'c', 'd']

//The spread operator can also be used inside Array literals:

//[1, ...[2,3], 4]
//    [1, 2, 3, 4]
//That gives you a convenient way to concatenate Arrays:
const x = ['a', 'b'];
const y = ['c'];
const z = ['d', 'e'];

const arrnine = [...x, ...y, ...z]; // ['a', 'b', 'c', 'd', 'e']


var normalmap = new Map();
normalmap.set('2-1', "foo");
normalmap.set('0-1', "bar");
normalmap.set('3-1', "baz");

var mapAsc = new Map([...normalmap.entries()].sort());

console.log(mapAsc)
//Using .sort(), remember that the array is sorted according to each character's ' +
//Unicode code point value, according to the string conversion of each element. So 2-1, 0-1, 3-1 will be sorted correctly.

console.log(mapAsc)

//You can convert map to an array and call array soring methods on it:
// [...map].sort(/* etc */);



var kvArray = [["key1", "value1"], ["key2", "value2"]];

// Use the regular Map constructor to transform a 2D key-value Array into a map
var myMap = new Map(kvArray);

console.log(myMap.get("key1")); // returns "value1"

var numbers = '[1, 2, 3, 4, 5, 6]';
var names = '["abc", "def", "ghi", "jkl", "mno", "pqr"]';

// string to Javascript object
var numbersObject = JSON.parse(numbers);
var namesObject = JSON.parse(names);


console.log(numbersObject);
console.log(namesObject);
// Javascript object to string
numbers = JSON.stringify(numbersObject);
names = JSON.stringify(namesObject);

console.log(numbers);
console.log(names);

// splice or slice an array or you can use new syntax

let newnumbers=[1,2,3]
let [xx,...yy]= newnumbers;
console.log(yy)

let obj2= {
    name: "Nipun",
    age:24
};
let {name,age}=obj2

console.log(name) // while destructuring fields has to be the same as present in the object
console.log(age)
