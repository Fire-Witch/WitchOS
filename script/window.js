function openWindowTwitch(){
    document.getElementById("windowPlace").innerHTML += '';
}

function closeWindow(id){
    var element = document. getElementById(id);
    element.parentNode.removeChild(element);
}