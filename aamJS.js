document.addEventListener("DOMContentLoaded", function() {

    alert("Hello World!");
    console.log("SAY HELLO WORLD");
})

var myPhoto = document.getElementById("collage")

myPhoto.addEventListener("click", changeImage)

function changeImage(){
    console.log("CHANGE IMAGE");
    myPhoto.src = "waves2.gif"
}
