const form = document.getElementById("messageForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let formData = new FormData(form);
  let formValues = Object.fromEntries(formData);

  let msg = await fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  json = await msg.json();
  console.log(msg, json);
});
