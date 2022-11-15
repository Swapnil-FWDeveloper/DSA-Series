alert("Please dry run the problem if you dont know dry run stop dsa and first learn DRY RUN");

let N=5;
let arr=[2,-4,6,8,-9];
let bag="";
for(let i=0;i<arr.length;i++){
    if(arr[i]>0)
    {
       bag+=arr[i];
    }else if(arr[i]<=0)
    {
        bag+=0+""
    }
}
console.log(bag)