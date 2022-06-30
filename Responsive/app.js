let Login = document.getElementById("Login");
let Register = document.getElementById("Register");
let Btn = document.getElementById("btn");


function register() {
    Login.style.left = "-400px";
    Register.style.left = "50px";
    Btn.style.left ="110px";
}
function login() {
    Login.style.left = "50px";
    Register.style.left = "450px";
    Btn.style.left ="0px";
}