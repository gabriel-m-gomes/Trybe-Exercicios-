let result = 0
let arr = []
let array = []

  for (let index = 0; index < 25; index+=1) {
      result+=1
      arr.push(result)
      if (result > 0) {
        array.push(arr[index] / 2)
      }
  }
  console.log(array)


