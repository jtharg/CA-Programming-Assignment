const ddlAnimal = document.getElementById('ddlAnimal');
const divAnimalInfo = document.getElementById('animal-info');
const error = document.getElementById('error');
const originalDescription = "Select an animal from the dropdown to see more information.";

ddlAnimal.addEventListener('change', function() {
  const animalId = ddlAnimal.value;
  if (animalId === '') {
    divAnimalInfo.textContent = originalDescription;
  } else {
    fetch(`http://localhost:3000/${animalId}`)
      .then(response => response.json())
      .then(data => {
        if (data.error) {
          if (error) {
            error.style.display = "block";
            error.textContent = data.error;
          }
        } else {
          const animalData = data.animalData;
          divAnimalInfo.innerHTML = `<strong>${animalData.name}</strong>: ${animalData.description}`;
          if (error) {
            error.style.display = "none";
          }
          window.history.pushState({}, document.title, "/");
        }
      })
      .catch(error => {
        if (error && error.message) {
          if (error) {
            error.style.display = "block";
            error.textContent = error.message;
          }
        }
      })
  }
});

