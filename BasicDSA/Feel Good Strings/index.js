let N=4;
let string=['u', 'u', 'u', 'u'];

let count=0
    for(let i=0;i<=N;i++)
    {
        if(string[i]=="a"|| string[i]=="e"||string[i]=="i"||string[i]=="o"||string[i]=="u"){
         count++
        }
    }
    if(count>=N/2)
    {
        console.log("Feel good!")
    }else{
        console.log("Feel bad!")
    }