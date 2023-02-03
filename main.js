/* constante 'form' recebendo o objeto 'document' com o método 'querySelector' que seleciona o primeiro elemento 
que corresponde a um ou mais seletores CSS */
// o objeto 'document' representa uma página web e permite acessar qualquer elemento HTML da página
const form = document.querySelector('form');

// constante nlwSetup recebendo um novo objeto 'NLWSetup' que recebe como parâmetro a constante 'form'
const nlwSetup = new NLWSetup(form);

// constante 'button' recebendo o objeto 'document' com o método 'querySelector'
const button = document.querySelector('.day-log');

// acessando o método 'addEventListener' do objeto 'button'
// 
button.addEventListener('click', add);
//
form.addEventListener('change', save);
//
function add() {
    let today = new Date().toLocaleDateString('pt-br');
    const dayExists = nlwSetup.dayExists(today);

    if (dayExists) {
        alert("Dia já registrado!");
        return;
    }

    nlwSetup.addDay(today);
}

function save() {
    localStorage.setItem('dailyHabits', JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem('dailyHabits')) || {};
nlwSetup.setData(data);
nlwSetup.load();