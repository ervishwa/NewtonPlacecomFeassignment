const getValue = (num) => {
    let ans = 0;
       while(num!=0){
           let p = num%10;
           ans += p;
           num = Math.floor(num/10);
       }
       //console.log(ans);
       let p = Math.floor(Math.floor(ans)/10);
       //console.log(p);
       if(p!=0){
          return getValue(Math.floor(ans));
       }else{
           return ans ;
       }
    
  };