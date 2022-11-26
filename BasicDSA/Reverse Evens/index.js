
let N=5
let arr=[1,2,3,4,5]
let bag="";
let count=0
for(let i=arr.length-1;i>=0;i--)
{
   if(arr[i]%2==0)
   {
    bag+=arr[i]+" "
    count++
   }
}
console.log(count)  
console.log(bag)
