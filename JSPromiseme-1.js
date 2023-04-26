function promiseMe(time,data) {
  
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
      resolve(data);
        },time)
    })
  }