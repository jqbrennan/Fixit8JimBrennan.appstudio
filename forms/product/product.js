let nums = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]
let j = 0
let product = 1
function prod(a, b) {
  let answer = a * b
  return answer
  }
  
while (j < nums.length) {
  product = prod(product, nums[j])
  console.log(product)
  j++
  }
