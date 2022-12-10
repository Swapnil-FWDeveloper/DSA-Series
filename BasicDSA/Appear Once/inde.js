
let arr=[3,5,3,3,8,5,6]
 let obj={}
 for(let i=0;i<arr.length;i++){
     if(obj[arr[i]]==undefined)
     {
         obj[arr[i]]=1;
     }else{
         obj[arr[i]]++
     }
 }
 
 let sum=0
 for(let key in obj){
     if(obj[key]==1)
     {
         sum+=Number(key)
     }
 }
 console.log(sum)