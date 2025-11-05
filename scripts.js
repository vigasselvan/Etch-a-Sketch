const container = document.getElementById("container");

for(let i = 0; i < 256; i++){
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    container.appendChild(gridSquare);
    gridSquare.addEventListener("mouseout", (event)=>{
        const randomRed = Math.floor(Math.random() * 255);
        const randomgreen = Math.floor(Math.random() * 255);
        const randomBlue = Math.floor(Math.random() * 255);
        const color = `rgb(${randomRed}, ${randomgreen}, ${randomBlue})`;
        event.target.style.backgroundColor = color;
    });
}

function pleaseReloadFirst(num){
    //remove old divs
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    //add button first
    const squareBtn = document.createElement("div");
    squareBtn.setAttribute('id', 'sqPerSide');
    squareBtn.setAttribute('onclick', 'giveSquare()');
    squareBtn.textContent = "Squares per side";
    container.appendChild(squareBtn);

    //add divs
    for(let i = 0; i < (num*num); i++){
        const gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        container.appendChild(gridSquare);
        gridSquare.style.height = (100/num)+'vh';
        gridSquare.style.width = (100/num)+'vw'; 
        gridSquare.addEventListener("mouseout", (event)=>{
        const randomRed = Math.floor(Math.random() * 255);
        const randomgreen = Math.floor(Math.random() * 255);
        const randomBlue = Math.floor(Math.random() * 255);
        const color = `rgb(${randomRed}, ${randomgreen}, ${randomBlue})`;
        event.target.style.backgroundColor = color;
    });
    }
}

function giveSquare(){
    let num = prompt("Enter Squares per side: ");
    if(num > 100){
        num = 100;
    }
    let val = 100/num;
    val = val.toFixed(2);
    pleaseReloadFirst(num); 
}
