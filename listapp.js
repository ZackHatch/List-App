var button = document.getElementById('addList');
button.addEventListener('click', additem)

function additem() {
    var input = document.getElementById("item").value;
    var li = document.createElement("li");



    var deletebutton = document.createElement("button");

    deletebutton.textContent = "Delete";
    deletebutton.className = "delete"

    deletebutton.addEventListener('click', () => {
        var kyle = deletebutton.perentElement.remove();
    });

    li.textContent = input + "";
//    li.appendChild("ul");
    li.appendChild(deletebutton);



    return document.getElementById("ul").appendChild(li);

}
