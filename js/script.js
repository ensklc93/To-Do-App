function newItem() {

    let list = $('#list')
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(document.createTextNode(inputValue));
    list.append(li)


    if (inputValue === '') {
        alert("You have to fill out the input field!");
    } else {
        list.append(li);
    }

    function crossOut() {
        li.toggleClass("strike");
    }

    li.on("dblclick", crossOut);

    let crossOutButton =  $('<button></button>')
    crossOutButton.append(document.createTextNode("X"))
    li.append(crossOutButton);

    crossOutButton.on("click", deleteListItem);

    function deleteListItem(){
        li.addClass("delete")
    }

    $('#list').sortable();

}