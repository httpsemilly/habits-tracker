let count1 = 0;
let count2 = 0;

function toggleMode() {
    let html = document.documentElement;

    html.classList.toggle("light-mode");
}

function changeLogo() {
    const logo = document.getElementById('logo-app');

    if (count1 == 0) {
        logo.src = './assets/logo-light-mode.svg';
        count1 = 1;
    } else {
        logo.src = './assets/logo-dark-mode.svg';
        count1 = 0;
    }
}

function changeLampIcon() {
    const image = document.getElementById('lamp-img');

    if (count2 == 0) {
        image.src = './assets/lamp-on.svg';
        count2 = 1;
    } else {
        image.src = './assets/lamp-off.svg';
        count2 = 0;
    }
}

function replaceStyle() {
    toggleMode();
    changeLogo();
    changeLampIcon();
}

const form = document.querySelector('form');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('.day-log');

button.addEventListener('click', add);

form.addEventListener('change', save);

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