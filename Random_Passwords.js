const includeLowerCase = document.getElementById("low").checked;
const includeUpperCase = document.getElementById("up").checked;
const includeNumber = document.getElementById("num").checked;
const includeSpecialCharacter = document.getElementById("spec").checked;

document.getElementById("submit").onclick = function(){

    const includeLowerCase = document.getElementById("low").checked;
    const includeUpperCase = document.getElementById("up").checked;
    const includeNumber = document.getElementById("num").checked;
    const includeSpecialCharacter = document.getElementById("spec").checked;

    let getCharacter = "";
    let password ="";
    const length = document.getElementById("size").value;

    const upper= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower="abcdefghijklmnopqrstuvwxyz";
    const number= "1234567890";
    const special= "!@#$%^&*()?><~:,./';][{}|";

    getCharacter += includeLowerCase ? lower : "" ;
    getCharacter += includeUpperCase ? upper : "" ;
    getCharacter += includeNumber ? number : "" ;
    getCharacter += includeSpecialCharacter ? special : "" ;

    for (let i = 0; i < length; i++) {
        const Random = Math.floor(Math.random()*getCharacter.length)
        password += getCharacter[Random];
    }

    document.getElementById("pass").textContent = getCharacter ? length ? password : "Define Size" : "Select Character";


}
