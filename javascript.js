function clicar(){
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`

    document.body.style.backgroundColor = randomColor;

    const title = document.getElementById('title');
    title.textContent = `Background Color: ${randomColor}`;
}

