//Створити 10 змінних з різними типами даних
console.log('!!Типи Даних');
let ynumber = 1
let xnumber = 2
console.log(ynumber + '  data type - number')
console.log('-');
let string = 'b'
console.log(string + '  data type - string')
console.log('-')
let inull = null
console.log(inull + '   data type - nul')
console.log('-')
let ibigInt = 1234567890123456789012345678901234567890n
console.log(ibigInt + '   data type - BigInt')
console.log('-')
let obj = {
	name: 'John',
	age: 18,
}
console.log(obj + '   data type - object')
console.log('-')
let arr = [1, 2, 'll']
console.log(arr + '   data type - array')
console.log('-')
let kan = NaN
console.log(kan + '   data type - NaN')
console.log('-')
let arr1 = [true, 2, 'mm']
let boolean = true
console.log(boolean + '   data type - boolean')
console.log('-')
console.log('-')
console.log('-')
let logne = !boolean



//перевірка типів
console.log('!!Перевірка типів');
console.log(typeof string + '   chek type of data')
console.log(typeof ynumber + '   chek type of data')
console.log('-')
console.log('-')
console.log('-')

//оператори присвоєння
console.log('!!Оператори присвоєння');
console.log(xnumber + string)
xnumber += 10
console.log(xnumber)
xnumber %= 2
console.log(xnumber)

