var doc = document.getElementById('miniscreen');
var myWindow = new window;

function addText(num) {
    if(num === "C"){
        doc.value = "";
    }
    else{
        doc.value += num;
    }
}
function solve() {
    var val = doc.value;
    val = eval(val);
    doc.value = val;
}
function changeScreenSize(w,h){
       myWindow.resizeTo( w,h )
}

