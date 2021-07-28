import fs from "fs";

fs.readdir("./", { withFileTypes: true }, (error, data) => {
  if (error) {
    console.log(err);
    return;
  }
  data.forEach((file) => {
    console.log(file);
  });
});
