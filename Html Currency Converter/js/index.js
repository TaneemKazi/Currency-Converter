window.onload = fontuneText();

function fontuneText(){
    console.log("ss");
    var fortune = document.getElementById('set-fortune');
    var fortunes = ["fortune 1","fortune 2","fortune 3","fortune 4"];

    var x = Math.floor(Math.random() * 4);
    fortune.innerHTML = fortunes[x];
}