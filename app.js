const btn = document.querySelector('#btn');
const h = document.querySelector('h1');
const copyBtn = document.querySelector('#copyColor');

const changeColor = () => {
    const r = Math.floor(Math.random() * 235);
    const g = Math.floor(Math.random() * 235);
    const b = Math.floor(Math.random() * 235);

    const newColor = `rgb(${r}, ${g}, ${b})`
    document.body.style.backgroundColor = newColor;

    h.innerText = `${newColor}`;
}

const copyColor = () => {
    document.execCommand("copy");
    alert("Copied");
}

btn.addEventListener('click', changeColor);
copyBtn.addEventListener('click', copyColor);