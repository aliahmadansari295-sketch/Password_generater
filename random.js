let number = Math.floor(Math.random()*100) +1;

document.getElementById("sub").onclick=function(){
    let result = Number(document.getElementById("mynum").value) ;
    let show;
    if (result > number){
        show = "LOWER";
    }
    else if (result < number){
        show = "HIGH";
    }
    else if ( result === number){
        show = " boy YOU GOT IT YOU WON BRO OR SIS WHATEVER"
    }
    document.getElementById("result").textContent = "YOU NUMBER " + result +" NEED TO BE GOO "+ show;
}