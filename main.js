let line = document.querySelectorAll(".lines")

for(let i=0; i < line.length; i++){

    line[i].addEventListener("click", () => {
        line[i].classList.toggle("act")
    })
    
    
} 

