const inputs = document.querySelectorAll(".obrigatorio");

inputs.forEach(input => {
  const label = input.closest(".input-lab, .input-lab2"); 
  const asterisco = label.querySelector(".asterisco");

  input.addEventListener("input", () => {
    if (input.value.trim() === "") {
      asterisco.style.display = "inline"; 
    } else {
      asterisco.style.display = "none";
    }
  });
});