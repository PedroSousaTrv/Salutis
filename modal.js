const openButtons = document.querySelectorAll(".open-modal");

openButtons.forEach(button => {
    button.addEventListener("click", ()=>{
        const modalID = button.getAttribute("data-modal");
        const modal = document.getElementById(modalID);

        modal.showModal();
    })
})

const closeButtons = document.querySelectorAll(".close-modal");

closeButtons.forEach(button =>{
    button.addEventListener("click", ()=>{
        const modalID = button.getAttribute("data-modal");
        const modal = document.getElementById(modalID);
        if(modalID == 1){
            modal.close();
        }
        
    })
})