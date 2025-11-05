const container = document.getElementById("container");

for(let i = 0; i < 256; i++){
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    container.appendChild(gridSquare);
    gridSquare.addEventListener("mouseout", (event)=>{
        event.target.style.backgroundColor = 'green';
    });
}
