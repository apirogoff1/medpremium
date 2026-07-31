const sharp = require("sharp");
const path = require("path");

const inputPath = path.join(__dirname, "public/photos/doctors/doctor-7.jpg");
const outputPath = path.join(__dirname, "public/photos/doctors/doctor-7-cropped.jpg");

const originalWidth = 6720;
const originalHeight = 4480;

const targetWidth = 3360;
const targetHeight = 4480;

const horizontalOffset = Math.round((originalWidth - targetWidth) / 2);

sharp(inputPath)
  .extract({
    left: horizontalOffset,
    top: 0,
    width: targetWidth,
    height: targetHeight
  })
  .toFile(outputPath)
  .then(() => {
    console.log("Готово. Сохранено в:", outputPath);
    console.log("Размер результата:", targetWidth, "x", targetHeight);
    console.log("Сдвиг от левого края:", horizontalOffset);
  })
  .catch((err) => {
    console.error("Ошибка:", err.message);
  });
