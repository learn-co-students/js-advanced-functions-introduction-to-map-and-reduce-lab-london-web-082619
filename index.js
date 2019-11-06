// Your code here
const testArr = [1,1,3,-3,-2,6,5,-9]

const mapToNegativize = (arr) => {
    let newArr = []
    arr.forEach(num => {
        newArr.push(num * -1)})
    return newArr
}

const mapToNoChange = (arr) => {
    let newArr = []
    arr.forEach(ele => {
        newArr.push(ele)
    })
    return newArr
}

const mapToDouble = (arr) => {
    let newArr = []
    arr.forEach(ele => {
        newArr.push(ele * 2)
    })
    return newArr
}

const mapToSquare = (arr) => {
    let newArr = []
    arr.forEach(ele => {
        newArr.push(ele ** 2)
    })
    return newArr
}

const reduceToTotal = (sourceArray, startingPoint = 0) => {
    let total = startingPoint
    sourceArray.forEach(num =>{
        total += num
    })
    return total
}

const reduceToAllTrue = (sourceArray) => {
    let flag = true
    sourceArray.forEach(ele =>{
        ele ? flag = true : flag = false
    })
    return flag

}

const reduceToAnyTrue = (sourceArray) => {
    let flag = false
    sourceArray.forEach(ele =>{
        ele ? flag = true : flag = false
    })
    return flag
}