let str='Wishash'
let w=0,i=0,s=0,h=0;
for(let el of str){
    if(el=="w")w++;
    if(el=="i")i++;
    if(el=="s")s++;
    if(el=="h")h++;
}

 let min = Math.min(w,i,s,h);

 if(min<=w && min<=i && min<=s && min<=h){
     console.log(min)
 }