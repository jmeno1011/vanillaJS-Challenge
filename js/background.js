const images = [
  "emotion-happy-svgrepo-com.svg",
  "emotion-normal-svgrepo-com.svg",
  "emotion-unhappy-svgrepo-com.svg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const right = document.getElementById("right");

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

bgImage.style.background = `url(img/${chosenImage}) no-repeat`;

right.appendChild(bgImage);
