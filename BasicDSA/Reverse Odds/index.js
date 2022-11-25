N=5
let A=[38,1,67,29,31]
let bag=""
let count=0;
for(let i=A.length-1;i>=0;i--){
    if(A[i]%2==1)
    {
       bag+=A[i]+" ";
       count++;
    }
}
console.log(count)
console.log(bag)