let array = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
let result = array[0]
for (let index = 0; index < array.length; index+=1) {
   result = result * array[index]
}
console.log(result)