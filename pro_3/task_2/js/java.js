var n=9, i=1, fact=1;

while(i<=n){
    fact=fact*i;
    i++;
}
document.getElementById('pr').innerHTML=fact;