/*let i = prompt("Browser");

if (i == "Edge"){
    alert("You've got the Edge!");
}
else if(i == "Chrome" || i == "Firefox" ||i == "Safari" ||i == "Opera"){
    alert( 'Okay we support these browsers too' );
}
else{
    alert( 'We hope that this page looks ok!' );
}*/
/*
let j = prompt("Число");

if (j == 0){
    alert("Вы ввели 0");
}
else if(j == 1){
    alert("Вы ввели 1");
}
else if(j == 2 || j == 3){
     alert("Вы ввели число 2,а может 3");
}
*/

/*
let arr = [];
let nam;

while(nam != 0){
    nam = prompt("Nam");
    arr.push(nam);
    console.log(arr);
}
*/

let arr = [42,65,49,68,56,47,70,42,51,35,58,63,40,70];
let sum = 0;
let r = arr[0];

for(let i = 0;i < arr.length; i++){
    console.log(i + " Индексу - соответсвует число " + arr[i]);
    sum += arr[i];
}
console.log(sum + " - Cумма всех элементов");
//console.log(Math.max(...arr)+ "  - Максимальное число");
let result = pow(r);
console.log(result + " - Сумма элементов");

function pow(r){ 
    for(let j = 0;j < arr.length;j++){
        if(arr[j] > r){
            r = arr[j];
        }
    }
     return r;
}
