// meant to be run with deno
// originally was node but janked it into deno on 1/15/23 because I didn't want to install node on the linux drive

import express from "npm:express@^4.18.2";

const app = express();

app.use("/", express.static("./"));

app.listen(3000, () => {
  console.log("listening on http://localhost:3000");
});
