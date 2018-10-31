var myslides = 0;

function showSlides() {
    let x = document.getElementsByClassName("images");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    myslides++;
    if (myslides > x.length) {myslides = 1}
    x[myslides-1].style.display = "block";
    setTimeout(showSlides, 2000);
}
showSlides();


var loginbtn = document.getElementById('loginRequest');
loginbtn.addEventListener("click",requestLogin);

function requestLogin() {
  let loginbtn = document.getElementById("loginRequest");
alert("You Are Now Register!!!!");

}
