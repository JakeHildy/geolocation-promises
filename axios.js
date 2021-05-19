const axios = require("axios");

const jokePromise = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://api.chucknorris.io/jokes/random`)
      .then((res) => resolve(console.log(res.data.value)))
      .catch((err) => reject(new Error(err)));
  });
};

console.log(jokePromise());
