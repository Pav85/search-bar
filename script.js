const userCardTemplate = document.querySelector("[data-user-template]");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const card = userCardTemplate.content.cloneNode(true);
    console.log(card);
  });
