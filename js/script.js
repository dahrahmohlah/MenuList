/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navbar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.getElementById("footr").innerHTML = "<p>&copy;  " + new Date().getFullYear() + " All Rights Reserved.</p>";