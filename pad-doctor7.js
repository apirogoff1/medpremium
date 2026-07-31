const sharp = require("sharp");
const path = require("path");

const inputPath = path.join(__dirname, "public/photos/doctors/doctor-7-cropped.jpg");
const outputPath = path.join(__dirname, "public/photos/doctors/doctor-7-padded.jpg");

sharp(inputPath)
  .extract({ left: 0, top: 0, width: 3360, height: 1 })
  .resize(1, 1)
  .raw()
  .toBuffer()
  .then((data) => {
    const r = data[0], g = data[1], b = data[2];
    console.log("Цвет верхнего края:", r, g, b);

    return sharp(inputPath)
      .extend({
        top: 600,
        bottom: 0,
        left: 0,
        right: 0,
        background: { r, g, b }
      })
      .extract({ left: 0, top: 0, width: 3360, height: 4480 })
      .toFile(outputPath);
  })
  .then(() => {
    console.log("Готово:", outputPath);
  })
  .catch((err) => console.error("Ошибка:", err.message));
