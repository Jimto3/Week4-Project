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
  console.log(message_list);
  getDataBase();
});

async function getDataBase() {
  let data = await fetch("http://localhost:8080/messages");
  let string = await data.json();
  console.log(string);
  string.forEach((msg) => {
    let box = document.createElement("div");
    let name = document.createElement("h2");
    let comment = document.createElement("h3");
    box.classList.add("commentBox");
    name.textContent = msg.name;
    comment.textContent = msg.message;
    box.appendChild(name);
    box.appendChild(comment);
    document.body.appendChild(box);
  });
}
getDataBase();
