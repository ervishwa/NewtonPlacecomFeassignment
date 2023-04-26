function chqprime(n){
    let ans = true;
    if(n==1){
    return false;
    }
    let p = Math.sqrt(n)
    for(let i=2;i<=p;i++){
    if(n%i==0){
    ans = false;
    break;
    }
    }
    //console.log(ans);
    return ans ;
    }
    function numberOfPrimes(N)
    {
     let ans = 0;
     for(let i=1;i<=N;i++){
     if(chqprime(i)){
     ans++;
     }
     }
     
     return ans ;
    
}