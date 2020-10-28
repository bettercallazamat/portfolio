var modal1 = document.getElementById("modal-project1")
var modal2 = document.getElementById("modal-project2")
var modal3 = document.getElementById("modal-project3")
var modal4 = document.getElementById("modal-project4")
var modal5 = document.getElementById("modal-project5")
var modal6 = document.getElementById("modal-project6")
var btn1 = document.getElementById("btn-project1");
var btn2 = document.getElementById("btn-project2");
var btn3 = document.getElementById("btn-project3");
var btn4 = document.getElementById("btn-project4");
var btn5 = document.getElementById("btn-project5");
var btn6 = document.getElementById("btn-project6");
var close1 = document.getElementsByClassName("close")[0];
var close2 = document.getElementsByClassName("close")[1];
var close3 = document.getElementsByClassName("close")[2];
var close4 = document.getElementsByClassName("close")[3];
var close5 = document.getElementsByClassName("close")[4];
var close6 = document.getElementsByClassName("close")[5];

btn1.onclick = function () {
    modal1.style.display = "block";
}

btn2.onclick = function () {
    modal2.style.display = "block";
}

btn3.onclick = function () {
    modal3.style.display = "block";
}

btn4.onclick = function () {
    modal4.style.display = "block";
}

btn5.onclick = function () {
    modal5.style.display = "block";
}

btn6.onclick = function () {
    modal6.style.display = "block";
}

close1.onclick = function () {
    modal1.style.display = "none";
}

close2.onclick = function () {
    modal2.style.display = "none";
}

close3.onclick = function () {
    modal3.style.display = "none";
}

close4.onclick = function () {
    modal4.style.display = "none";
}

close5.onclick = function () {
    modal5.style.display = "none";
}

close6.onclick = function () {
    modal6.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    } else if (event.target == modal2) {
        modal2.style.display = "none";
    } else if (event.target == modal3) {
        modal3.style.display = "none";
    } else if (event.target == modal4) {
        modal4.style.display = "none";
    } else if (event.target == modal5) {
        modal5.style.display = "none";
    } else if (event.target == modal6) {
        modal6.style.display = "none";
    } 
}

document.addEventListener('keydown', function(e) {
    let keyCode = e.keyCode;
    if (keyCode === 27) {
        modal1.style.display = "none";
        modal2.style.display = "none";
        modal3.style.display = "none";
        modal4.style.display = "none";
        modal5.style.display = "none";
        modal6.style.display = "none";
    }
});