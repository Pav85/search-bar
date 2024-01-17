const userCardTemplate = document.querySelector("[data-user-template]");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      console.log(user);
    });
  });
