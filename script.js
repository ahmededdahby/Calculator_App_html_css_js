function display(val) {
    document.getElementById('result').value += val;
}

function solve(){
    let x = document.getElementById('result').value
    //eval() take a string as an inpit and calculate the operation like it's not a string 
    let y = eval(x)
    document.getElementById('result').value = y
}

function clearScreen() {
    document.getElementById('result').value = ''
}