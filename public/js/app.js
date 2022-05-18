function changeBack(){

    var button = document.getElementsByClassName("pic")[0];

    if(button.classList.contains("changeColor"))
    {
        button.classList.remove("changeColor");
    }
    else
    {
        button.classList.add("changeColor");
    }

}