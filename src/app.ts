import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.get("/", (req, res) =>
  res.json({
    message: "Hello world",
  })
);

app.listen(PORT, () =>
  console.log(`Server listen on http://localhost:${PORT}`)
);
