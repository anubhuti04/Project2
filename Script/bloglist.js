var c = document.getElementsByClassName("configModel")[0];

var cB = document.querySelectorAll(".delete");

var confirmationStats = document.getElementById("no");



var j;
for (j = 0; j < cB.length; j++) {
    let btn = cB[j];
    btn.onclick = function() {
        c.style.display = "flex";
    }
}

confirmationStats.onclick = function() {
    c.style.display = "none";
}