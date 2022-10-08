const timer = document.querySelector('.timer');
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');


function zeroAEsquerda(num){
    return num >= 10? num: `0${num}`; 
}

let hora = 0;
let minuto = 0;
let segundo = 0;

let horas;
let minutos; 
let segundos;

horas = zeroAEsquerda(hora); 
minutos = zeroAEsquerda(minuto);
segundos = zeroAEsquerda(segundo);

timer.innerHTML = `${horas}:${minutos}:${segundos}`; 

function codTimer() {
    horas = zeroAEsquerda(hora); 
    minutos = zeroAEsquerda(minuto);
    segundos = zeroAEsquerda(segundo);

    timer.innerHTML = `${horas}:${minutos}:${segundos}`; 

    segundo++;
    if (segundo > 59) {
        minuto++;
        segundo = 0
    };

    if(minuto > 59){
        hora++;
        minuto = 0;
    }

    if(hora > 23){
        hora = 0;
        minuto = 0;
        segundo = 0;
    }
};


let starter;   

function startTimer(){
    clearInterval(starter);
    starter = setInterval(codTimer, 1000);
}

function stopTimer(){
    clearInterval(starter);
} 

function resetTimer(){
    clearInterval(starter);

    hora = 0;
    minuto = 0;
    segundo = 0;

    horas = zeroAEsquerda(hora); 
    minutos = zeroAEsquerda(minuto);
    segundos = zeroAEsquerda(segundo);
    timer.innerHTML = `${horas}:${minutos}:${segundos}`;
}


iniciar.addEventListener('click', function(){
    startTimer();
});

pausar.addEventListener('click', function(){
    stopTimer();
});

zerar.addEventListener('click', function(){
    resetTimer();
});
