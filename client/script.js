const form = document.getElementById("messageForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let formData = new FormData(form);
  let formValues = Object.fromEntries(formData);

  let message_list = await fetch("http://localhost:8080/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
});

async function getDataBase() {
  let data = await fetch("http://localhost:8080/messages", { method: "POST" });
}
