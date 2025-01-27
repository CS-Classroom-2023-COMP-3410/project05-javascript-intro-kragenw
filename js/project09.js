let array = [];
const arraySize = 20;
const arrayContainer = document.getElementById('array-container');
const commentary = document.getElementById('commentary');
const speedInput = document.getElementById('speed');

function generateArray() {
    array = [];
    for (let i = 0; i < arraySize; i++) {
        array.push(Math.floor(Math.random() * 100) + 1);
    }
    drawArray();
}

function drawArray() {
    arrayContainer.innerHTML = '';
    array.forEach(value => {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 3}px`;
        arrayContainer.appendChild(bar);
    });
}

async function bubbleSort() {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                drawArray();
                commentary.innerText = `Swapped ${array[j]} and ${array[j + 1]}`;
                await sleep(speedInput.value);
            }
        }
    }
    commentary.innerText = 'Array is sorted!';
}

async function insertionSort() {
    for (let i = 1; i < array.length; i++) {
        let key = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j--;
            drawArray();
            commentary.innerText = `Moving ${array[j + 1]}`;
            await sleep(speedInput.value);
        }
        array[j + 1] = key;
    }
    commentary.innerText = 'Array is sorted!';
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startSorting() {
    const algorithm = document.getElementById('algorithm').value;
    if (algorithm === 'bubble') bubbleSort();
    else if (algorithm === 'insertion') insertionSort();
}

function resetArray() {
    generateArray();
    commentary.innerText = '';
}

generateArray();
