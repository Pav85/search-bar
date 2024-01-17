const userCardTemplate = document.querySelector("[user-card-template]");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    const card = userCardTemplate.content.cloneNode(true);
  });
