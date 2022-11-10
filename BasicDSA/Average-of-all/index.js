
let n=4;
let arr=[2 ,5 ,0 ,9];
let sum=0;
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
let average=sum/n;
average=Math.ceil(average)
console.log(average)