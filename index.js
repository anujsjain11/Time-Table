

document.getElementById('table').addEventListener('click', (event) => {
    console.log(event)
    if (event.target.classList.contains('cover-area') == true) {
        const button = event.target;
        if (button.style.backgroundColor === "white" ){
            button.style.backgroundColor = "black";
        } else {
            button.style.backgroundColor = "white";
        }
    }
});

// rgb(31, 31, 31))