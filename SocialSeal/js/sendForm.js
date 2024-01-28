const submitForm = () => {
  // Form
  const form = document.querySelector("#form");
  const firstForm = form.querySelector("#firstForm");
  const secondForm = form.querySelector("#popup");
  const thirdForm = form.querySelector("#popup2");

 
 
  // ==== First form ====
  // Inputs
  const nameInput = firstForm.querySelector("#nameInput").value;
  const emailInput = firstForm.querySelector("#email").value;
  const phoneInput = firstForm.querySelector("#phone").value;
  // Select
  const subjectSelect = firstForm.querySelector("#subject").value;



  // ==== Second form ====
  // Select
  const dateSelect = secondForm.querySelector("#dateSelect").value;
  const timeSelect = secondForm.querySelector("#timeSelect").value;



  // ==== Third form ====
  // Select
  const expectationSelect = thirdForm.querySelector('#expectationSelect').value;
  // TextArea
  const comments = thirdForm.querySelector('#comments').value;
  // Checkboxes
  const checkboxes = thirdForm.querySelectorAll(".checkbox");


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

  

  // Form data

  const formData = new FormData();
  // First form
  formData.append('name', nameInput);
  formData.append('email', emailInput);
  formData.append('phone', phoneInput);
  formData.append('subject', subjectSelect);
  // Second form
  formData.append('day', dateSelect);
  formData.append('time', timeSelect);
  // Third form
  formData.append('expectation', expectationSelect);
  const selectedCheckboxes = updateCheckboxes();
  formData.append('platform', JSON.stringify(selectedCheckboxes));
  formData.append('comments', comments);


  // Za cholere nie wiem jaki link mam użyć tego api..

  fetch('URL', {
    method: 'POST',
    body: formData,
  })
  .then(response => response.json())
  .then(data => {
    console.log("Odpowiedź z serwera", data);
  })
  .catch(error => {
    console.log("Błąd podczas wysyłania danych:", error);
  });
}

const submitButton = document.querySelector('#submitBtn');
submitButton.addEventListener('click', submitForm);