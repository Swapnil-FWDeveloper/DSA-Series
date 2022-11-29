
let N=2;
let M=3;
let arr=[1, 3, 2,3, 3, 2, 9, 7]
let bag=''
    for(let i=0;i<arr.length;i++){
        if(arr[i]%M==0)
        {
            bag+=-1+" "
        }else if(arr[i]%M!==0)
        {
            bag+=arr[i]+" "
        }
    }
    console.log(bag)