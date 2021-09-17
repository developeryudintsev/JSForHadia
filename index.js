// lesson 3 :console.log
// let Nadya = 'Nadya is cool girl';
// alert(Nadya)
// console.log(Nadya)

//=======================================================================================
// lesson 4 : concatenation
// let a = 1;
// let b = 2;
// let c = 3;
// console.log(a + b - c)//sum of numbers

// let d = 'Misha is';
// let space = ' '
// let e = 'cool boy';
// console.log(d + space + e)//concatenation of strings

// let f = '2'
// let g = '3'
// let h = 'a'
// let i = 'b'
// console.log(f + g)
// console.log(h + i)

//=======================================================================================
//lesson 5 : Array
// let Array = [1, 2, 3, 'Misha', 'Nadya']
// let Array2 = [1, 'string']
// let bag = []
// console.log(Array[4])

//=======================================================================================
//lesson 6 : cycle for
// let Array = [1, 2, 3, 'Misha', 'Nadya', 'Sasha']
// console.log(Array[0])
// console.log(Array[1])
// console.log(Array[2])
// console.log(Array[3])
// console.log(Array[4])
// console.log(Array);
// for (let i = 0; 6 < 6; i = i + 1) {
//     console.log(Array[i])
// }
//=======================================================================================
//lesson 7 : cycle for +Array.length

// let hello = 'hello';
// console.log(hello.length)
// let world = 'hello world';
// console.log(world.length)
// let Array = [1, 2, 3, 4, 5]
// console.log(Array.length)

// let Array = [1, 2, 3, 'Misha', 'Nadya', 'Sasha']

// for (let i = 0; i < Array.length; i = i + 1) {
//     console.log(Array[i])
// }
//=======================================================================================
//lesson 8 : cycle foreach
// let Array = [1, 2, 3, 'Misha', 'Nadya', 'Sasha']

// Array.forEach(element => {
//     console.log(element)
// });
//=======================================================================================
//lesson 9 : cycle map
// let Array = [1, 2, 3, 'Emilka', 'Nadya', 'Sasha']

// Array.map(element => {
//     console.log(element)
// })
//=======================================================================================
//lesson 10 : push & pop
//push-add new element
//pop- delete last element in array
// let Array = [1, 2, 3, 'Emilka', 'Nadya', 'Sasha']

// Array.pop()

// Array.map(element => {
//     console.log(element)
// })

//=======================================================================================
//lesson 11 : shift & unshift
//push -add new element in the end of array
//unshift-add new element in the beginning of array
let Array = [1, 2, 3, 'Emilka', 'Nadya', 'Sasha']

// Array.unshift('Olga')
Array.shift()

Array.map(elemnt => {
    console.log(elemnt)
})