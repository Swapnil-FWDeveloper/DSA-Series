
let num=930;
let a = num - 80;
let unit = 0;
if(a<=150)
{
   unit = a/3; 
}
else if(a>=150 && a<=650)
{
    unit = 50 + (a-150)/5;
}
else
{
    unit = 50 + 100 + (a-650)/10;
}
console.log(unit);
