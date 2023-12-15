import express from "express";
import axios from "axios";
import path from "path";

const dir = path.resolve();

const app = express();
const port = 3001;

app.get("/", async (req, res) => {
  // Get query parameter
  const { q } = req.query;

  // Check if query parameter is missing
  if (!q) {
    return res
      .status(400)
      .sendFile(path.join(dir, "views", "missing-q-parameter.html"));
  }

  // Try to get image from url
  try {
    res.setHeader("Content-Type", "image/png");
    const response = await axios.get(q, { responseType: "stream" });
    response.data.pipe(res);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.listen(port, () => {
  console.log("App listening on port: " + port);
});
