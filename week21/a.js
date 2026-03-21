function toSum(arr, target) {
    let index = 0
    let num = arr[index]
    for (let i = 0; i < arr.length; i++) {
        let sum = arr[i] + num
        if (sum === target) return [arr[i],num]
    }
}
console.log(toSum([1, 4, 3, 2,2], 4))
































function aongromot(arrStr) {
    const newArr = []
    let index = 0
    const word = arrStr[index];
    for (let i = 0; i < arrStr.length; i++) {
        for (let j = 0; j < arrStr.length; j++) {
            console.log(arrStr[j]);
            
            // if(word.includes()){}
            
        }
    }
        
    
}
console.log(aongromot(["abc","bca","acb","bat","cat","tac"]))
console.log(aongromot(["abc","bca","acb"]))