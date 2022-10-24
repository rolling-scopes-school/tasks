import './assets/style/style.css';
import { generateMatrix, setPositionSquare, shuffle } from './helper.js'
 
document.addEventListener('DOMContentLoaded', () => {

    const root = document.querySelector('#root');
    const container = document.createElement('div');
    container.classList.add('container');
    const navigation = document.createElement('div');
    navigation.classList.add('navigation');
    const startBtn = document.createElement('button');
    startBtn.classList.add('btn');
    startBtn.innerHTML = 'Играть';
    const timeDisplay = document.createElement('div');
    timeDisplay.classList.add('time');
    navigation.append(timeDisplay);
    navigation.append(startBtn);
    const playingField = document.createElement('div');
    playingField.classList.add('playing_container');
    
    // const 

    for (let i = 1; i <= 16; i += 1) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.textContent = i;
        playingField.append(square);
    }
    container.append(navigation);
    container.append(playingField);
    root.append(container);
    const squares = Array.from(root.querySelectorAll('.square'));
    const arrSquares = shuffle(squares.map(item => +item.innerHTML));
    
    let matrixField = generateMatrix(arrSquares);

    squares[15].style.display = 'none';
    setPositionSquare(matrixField, squares);
    
})


