import express from "express";
import axios from "axios";
import { testContentType } from "./helpers/testContentType.js";

const app = express();
const port = 3001;

app.get("/", async (req, res) => {
  const { q } = req.query;

  if (!q) {
    return res.status(400).send({
      status: 400,
      message: "The q query parameter is missing.",
    });
  }

  // Try to get image from url
  try {
    const response = await axios.get(q, { responseType: "stream" });

    // If the url does not point to an image
    if (!testContentType(response)) {
      return res.status(400).send({
        status: 400,
        message: "The url provided does not point to an image.",
      });
    }

    // Return image
    res.setHeader("Content-Type", "image/png");
    return response.data.pipe(res);

  } catch (error) {
    res.status(500).send(error);
  }
});

// 404 routes
app.get("*", (req, res) => {
  res.status(404).send({
    status: 404,
    message: "The route you are looking for does not exist.",
  });
});

app.listen(port, () => {
  console.log("App listening on port: " + port);
});
