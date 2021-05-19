// console.log("hello world");

// const lotteryPromise = new Promise(function (resolve, reject) {
//   console.log("Lottery Draw is happening!! 🔮");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve("You WIN ⛏");
//     } else {
//       reject(new Error("You lost your money. 💩"));
//     }
//   }, 2000);
// });

// lotteryPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// wait(2)
//   .then(() => {
//     console.log("I waited for 2 seconds");
//     return wait(1);
//   })
//   .then(() => console.log("I waited for 1 second"));

// Promise.resolve("abc").then((x) => console.log(x));
// // Promise.reject(new Error("Problem!")).catch((x) => console.error(x));

// console.log("Getting position");

// const getPosition = () => {
//   return new Promise((resolve, reject) => {
//     // navigator.geolocation.getCurrentPosition(
//     //   (position) => resolve(position),
//     //   (err) => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// // getPosition().then((pos) => console.log(pos));

// const whereAmI = function () {
//   getPosition()
//     .then((pos) => {
//       const { latitude: lat, longitude: lng } = pos.coords;
//       console.log(lat, lng);
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);
//     });
// };

// document.querySelector(".btn").addEventListener("click", whereAmI);

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

// const imgContainer = document.querySelector(".images");

// const createImage = function (imgPath) {
//   return new Promise((resolve, reject) => {
//     const img = document.createElement("img");
//     img.src = imgPath;

//     img.addEventListener("load", () => {
//       imgContainer.append(img);
//       resolve(img);
//     });

//     img.addEventListener("error", () => {
//       reject(new Error("Image not found"));
//     });
//   });
// };

// let currentImg;
// createImage("./img/img-1.jpg")
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 1 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("./img/img-2.png");
//   })
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 2 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const getPosition = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  // Geolocation
  const pos = await getPosition();
  const { latitude: lat, longitude: lng } = pos.coords;

  // Reverse Geocoding
  const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  const dataGeo = await resGeo.json();

  // Country Data
  const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
  );
  const data = await res.json();
  console.log(data);
};

whereAmI();
