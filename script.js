function fibCislo (n){
   if (n<2) return 
    return fibCislo(n-1)+ fibCislo(n-2);
   
}
function vypocitej (){
    alert(fibCislo(Number(document.getElementById("vstup").value)))
}