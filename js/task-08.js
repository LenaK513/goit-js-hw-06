const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();

  const elementsOfForm = event.currentTarget.elements;
  const email = elementsOfForm.email.value;
  const password = elementsOfForm.password.value;

  if (email === "" || password === "") {
    alert("Fill the form!");
  } else {
    const formData = {
      email,
      password,
    };
    console.log(formData);
    form.reset();
  }
}
