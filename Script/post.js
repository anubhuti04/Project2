var user_comment = document.getElementById("comment");
var c_s = document.getElementById("allComments");

var sample = document.getElementById("sampleBody");
var sampleBodyEdit = document.getElementById("sampleEdit");

var head = document.getElementById("containerHead");
var headEdit = document.getElementById("changes");

var editButtn = document.getElementById("edit");
var sB = document.getElementById("save");

var btn_like = document.getElementsByClassName("likeBtn");
var Count = document.getElementById("counter");

function postFunction() {
    var new_parah = document.createElement("P");
    var text = document.createTextNode(comment.value);
    new_parah.appendChild(text);
    new_parah.setAttribute("class", "comment_content");
    c_s.insertBefore(new_parah, c_s.childNodes[0]);
}

function editFunction() {
    head.style.display = "none";
    headEdit.style.display = "block";
    editButtn.style.display = "none";

    sB.style.display = "block";
    sample.style.display = "none";
    sampleBodyEdit.style.display = "block";

    headEdit.value = head.textContent;
    var val = sample.textContent.trim();
    sampleBodyEdit.innerHTML = val;

    sampleBodyEdit.style.height = "1px";
    sampleBodyEdit.style.height = (25 + sampleBodyEdit.scrollHeight) + "px";

}

function saveFunction() {
    head.style.display = "block";
    headEdit.style.display = "none";
    sample.style.display = "block";

    sampleBodyEdit.style.display = "none";
    editBtn.style.display = "block";
    saveBtn.style.display = "none";

    head.innerHTML = headEdit.value;
    sample.innerHTML = sampleBodyEdit.value;
}

var count = 0;

function likeFunction() {

    btn_like.innerHTML = "<img src=\'https://img.icons8.com/fluent-systems-filled/20/ffffff/facebook-like.png\'/>Liked!";
    count++;
    if (count == 1) {
        Count.innerHTML = "1 person has liked it";
    } else {
        Count.innerHTML = count + " people have liked it";
    }

}