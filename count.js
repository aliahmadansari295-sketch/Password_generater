let count = 0;
let increase = document.getElementById("incre").onclick = function(){
    count++;
    document.getElementById("mycount").textContent = count;
}
let decrese = document.getElementById("decre").onclick = function(){
    count--;
    document.getElementById("mycount").textContent = count;
}
let restart = document.getElementById("reset").onclick = function(){
    count=0;
    document.getElementById("mycount").textContent = count;
}

let x = 3.91;
console.log(Math.round(x));