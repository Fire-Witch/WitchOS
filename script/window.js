//général
function closeWindow(id){
    var element = document. getElementById(id);
    element.parentNode.removeChild(element);
}

function deplaceWindow(id){
    //on récupère la position X Y de la souris
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    //on récupère la postion de la fenètre
    var posWindow = document.getElementById(id).getBoundingClientRect();
}

//twitch
function openWindowTwitch(){
    document.getElementById("windowPlace").innerHTML += '';
}