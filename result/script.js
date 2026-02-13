let captcha = Math.random().toString(36).substring(2,7).toUpperCase();
document.getElementById("capText").innerText = captcha;

function login(){
    let seat = document.getElementById("seat").value.trim().toUpperCase();
    let mother = document.getElementById("mother").value.trim().toLowerCase();
    let cap = document.getElementById("capInput").value.trim().toUpperCase();

    if(
        seat === "S400880239" &&
        mother === "shaila ramdas walunj" &&
        cap === captcha
    ){
        window.location.href = "result.html";
    }else{
        alert("Invalid details or captcha");
    }
}