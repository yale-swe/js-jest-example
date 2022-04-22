import express from "express";

const app = express();

app.get("/hello", (req, res) => {
  res.status(200).send({
    message: "Hello world!",
  });
});

export default app;
