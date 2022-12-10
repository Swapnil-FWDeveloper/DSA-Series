let A=[1,3,2,3,3,2,1,1]

 let max=-Infinity;
 for(let i=0;i<A.length;i++){
     if(A[i]>max){
         max=A[i]
     }
 }
 let bag=''
 for(let j=0;j<A.length;j++){
     if(A[j]<max)
     {
         bag+=-1+" "
     }else{
         bag+=A[j]+" "
     }
 }
 console.log(bag)