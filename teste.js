console.log(1111111111111);


fetch("http://localhost:3000/players")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));


