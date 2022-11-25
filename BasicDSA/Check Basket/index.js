n=3
let count=0
    let i;
    for(i=1;i<B.length;i++){
      if(B[0]==B[i])
      {
          count++;
      }
    }
    // console.log(count);
    if(count==(N-1))
    {
     console.log("Single Type")
    }
    else
    {
     console.log("Mixed Basket")
    }