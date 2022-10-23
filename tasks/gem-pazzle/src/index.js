import './assets/style/style.css';


const table = [[ 1, 3, 5, 7],
               [ 2, 4, 6, 8],
               [11,13,15, 9],
               [10,12,14,  ]];

console.log('Структуру данных для поля игры представляет двумерный массив : ' + table);

const root = document.querySelector('#root');

document.addEventListener('click', (e) => {
    e.preventDefault();
    const table = document.createElement('h1');

    table.innerHTML = 'Hello' + table;
    const root = document.querySelector('#root');
    root.append(table);
})