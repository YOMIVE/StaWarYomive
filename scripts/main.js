/*
function scrollToCatalogue() {
    window.scrollTo(0, 1040)
}*/

function scrollToCatalogue() {
    var element = document.getElementById("cat-234");
    //window.scrollTo(0, 1040)
    if (element) {
        element.scrollIntoView();
    }
}

function targetToStart() {
    window.scrollTo(0, 0)
}






