let userInfo = document.querySelector("#user_info");
let usrDom = document.querySelector("#user");
let links = document.querySelector("#links");
let logoutBtn = document.querySelector("#logout");



let username = localStorage.getItem("username");
if(username){
    links.remove();
    userInfo.style.display = "flex";
    usrDom.innerHTML= username;
}

logoutBtn.addEventListener("click", function(){
    localStorage.clear();
    setTimeout( () => {
        window.location= "register.html";
    }, 1500);
});


