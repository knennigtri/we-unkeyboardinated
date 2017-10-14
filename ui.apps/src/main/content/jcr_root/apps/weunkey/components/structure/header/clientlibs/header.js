
function myFunction() {
    var x = document.getElementById("nav").firstElementChild;
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    var x = document.getElementById("header");
    if (x.className === "") {
        x.className += " responsive";
    } else {
        x.className = "";
    }
    
}
