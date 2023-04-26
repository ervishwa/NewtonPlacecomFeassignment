function sumOfProductOfDigits(n1, n2)
{
    let ans = 0;
    while(n1!=0 || n2!=0){
        let p = (n1)%10;
        let q = (n2)%10;
        ans += p*q ;
        n1 = Math.floor(n1/10);
        n2 = Math.floor(n2/10);
    }
   
    return ans ;
}