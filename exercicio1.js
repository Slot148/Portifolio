function addDisplay(value){
    const display = document.getElementById("display");
    display.textContent += value;
}

function clearDisplay(){
    const display = document.getElementById("display");
    display.textContent = "";
}

function calcular(){
    const display = document.getElementById("display");
    try{
        display.textContent =
        eval(display.textContent);
    }catch(error) {
        display.textContent = 'Erro'
}
}

function delChar(){
    let display =  document.getElementById('display');
    display.textContent = display.textContent.slice(0, -1)
}