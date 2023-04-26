function takeMultipleNumbersAndAdd(){
    let ans = 0;
    let arr = [...arguments]
    for(let i=0;i<arr.length;i++){
        ans +=arr[i];
    }
   return ans;
 }