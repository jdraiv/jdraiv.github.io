
function setDate(name, appendToID){
    let date = new Date().getFullYear();

    document.getElementById(appendToID).innerHTML = `© ${date.toString()} ${name}`;
}


setDate('Jdraiv', 'footer-date');