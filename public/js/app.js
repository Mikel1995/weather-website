console.log("Client side javascript file is loaded!");
// fetch("http://puzzle.mead.io/puzzle").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//   });
// });

const weatherForm = document.querySelector("form");
const locationInput = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const locationInputValue = locationInput.value;
  messageOne.textContent = 'Loading... ';
  messageTwo.textContent = '';
  fetch(`/weather?address=${locationInputValue}`).then((response) => {
    response.json().then((data) => {
      if (data.error) {
          messageOne.textContent = data.error;
        return;
      }
      messageOne.textContent = data.location
      messageTwo.textContent = data.forecast;
      locationInput.value = "";
    });
  });
});
