const steen = document.getElementById('steen');
const steenknop =  document.querySelector('.steenknop');
const waterbak = document.getElementById('waterbak');
const badknop =  document.querySelector('.badknop');
const kiwi =  document.querySelector('.kiwi');
const etengras = document.getElementById('etengras');
const etenknop =  document.querySelector('.etenknop');
const muziek = new Audio ("muziek/game-muziek.mp3");




function steenGeklikt(){  
    muziek.play();[]
    document.getElementById('tekst1').textContent = 'Kiwi vond de steentjes heel erg leuk';
    if (steen.classList.contains('zichtbaar')) {
        steen.classList.remove('zichtbaar');
        kiwi.classList.remove('onzichtbaar');
    } else {
        steen.classList.add('zichtbaar');
        kiwi.classList.add('onzichtbaar');
        etengras.classList.remove('zichtbaar')
        waterbak.classList.remove('zichtbaar')
    }   

}

function etenGras(){
    muziek.play();[]
    document.getElementById('tekst1').textContent = 'Dat vond kiwi lekker eten';
    if (etengras.classList.contains('zichtbaar')) {
        etengras.classList.remove('zichtbaar');
        kiwi.classList.remove('onzichtbaar');
    } else {
        etengras.classList.add('zichtbaar');
        kiwi.classList.add('onzichtbaar');
        steen.classList.remove('zichtbaar')
        waterbak.classList.remove('zichtbaar')
    }
}


function drinkWater(){
    muziek.play();[]
    document.getElementById('tekst1').textContent = 'Kiwi vond het water lekker';
    if (waterbak.classList.contains('zichtbaar')) {
        waterbak.classList.remove('zichtbaar');
        kiwi.classList.remove('onzichtbaar');
    } else {
        waterbak.classList.add('zichtbaar');
        kiwi.classList.add('onzichtbaar');
        steen.classList.remove('zichtbaar')
        etengras.classList.remove('zichtbaar')
    }
}
badknop.addEventListener("click", drinkWater);
steenknop.addEventListener("click", steenGeklikt);
etenknop.addEventListener("click", etenGras);




//Bronnenlijst uitleg gekregen van deze mensen:
// Bjarne Zeeman GitHub: https://github.com/bzschool
// Jesse Leeuwerink GitHub: https://github.com/J3SS3HVA
// JP Sturkenboom GitHub: https://github.com/ju5tu5
// Rukiya Tossou GitHub: https://github.com/RukiyaTossou
// Joost Faber Github: https://github.com/joostf
