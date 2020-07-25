var addText = document.querySelector("#Text");
var List = document.querySelector(".List");


function Add() {
    if (addText.value) {
        var p = document.createElement("p");
        p.setAttribute("class", "list-items");
        p.innerHTML = addText.value + "<button onclick='Remove(this)'>X</button>";
        List.appendChild(p)
        addText.value = "";
    } else {
        alert("Please enter some text");
    }
}

function RemoveAll() {
    List.innerHTML = "";
}

function Remove(element) {
    element.parentNode.remove()
}