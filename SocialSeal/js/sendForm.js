// Przykład pobierania inputów
// Przykład pobierania selectów



// const inputFuntion = () => {
//     const nameInput= document.querySelector('#nameInput');
//     const emailInput= document.querySelector('#email');
//     const phoneInput= document.querySelector('#phone');
//     const inputArray = [];

//     inputArray.push("Name: " + nameInput.value);
//     inputArray.push("Email Adress: " + emailInput.value);
//     inputArray.push("Phone Number: " + phoneInput.value);
    
//     const JsonArray = JSON.stringify(inputArray);
//     console.log(JsonArray);
// }


// const acceptBtn = document.querySelector('#openPopup2');

// const selectFunction = () => {
//     const daySelect = document.getElementById('day');
//     const timeSelect = document.getElementById('time');
//     const date = daySelect.value;
//     const time = timeSelect.value;

//     const datetimeSelectArr = [];
//     datetimeSelectArr.push("Wybrana data: " + date);
//     datetimeSelectArr.push("Wybrana godzina: " + time);

//     const JsonArray = JSON.stringify(datetimeSelectArr);
//     console.log(JsonArray);
// }

// const functions = () => {
//     inputFuntion();
//     selectFunction();
// }

// acceptBtn.addEventListener('click', functions);
const submitForm = () => {
  // Form
  const form = document.querySelector("#form");
  const firstForm = form.querySelector("#firstForm");
  const secondForm = form.querySelector("#popup");
  const thirdForm = form.querySelector("#popup2");

  // Input and select Elements
  // First form
  // Inputs
  const nameInput = firstForm.querySelector("#nameInput").value;
  const emailInput = firstForm.querySelector("#email").value;
  const phoneInput = firstForm.querySelector("#phone").value;
  // Select
  const subjectSelect = firstForm.querySelector("#subject").value;

  // Second form
  // Select
  const dateSelect = secondForm.querySelector("#dateSelect").value;
  const timeSelect = secondForm.querySelector("#timeSelect").value;





  // ==== Third form ====

  // Checkboxes
  const checkboxes = thirdForm.querySelectorAll(".checkbox");
  // Submit btn
  const submitBtn = thirdForm.querySelector("#submitBtn");

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", () => {
      updateCheckboxes();
    });
  });

  const updateCheckboxes = () => {
    const selectedCheckboxes = {};

    checkboxes.forEach(function (checkbox) {
      const platform = checkbox.getAttribute("data-platform");
      const action = checkbox.getAttribute("data-action");

      selectedCheckboxes[platform] = selectedCheckboxes[platform] || {};
      selectedCheckboxes[platform][action] = checkbox.checked;
    });
    
    return selectedCheckboxes;
  };

  //Wysyłanie zaznaczonych checkboxów
  const sendSelectedCheckboxes = () => {
    const selectedCheckboxes = updateCheckboxes();
    console.log("Wysyłanie zaznaczonych checkboxów:", selectedCheckboxes);
  };

  submitBtn.addEventListener("click", sendSelectedCheckboxes);
}



