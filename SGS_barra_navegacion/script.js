var sign =document.querySelector('.btn')

function signin(){ 
    console.log(sign.innerHTML);
    if (sign.innerHTML == "Login") {
        sign.innerHTML = "Logout"
    } else if(sign.innerHTML == "Logout") {
        sign.innerHTML= "Login"
    }
}