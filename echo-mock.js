// echo-mock.js
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// JSONボディをパースするためのミドルウェア
app.use(express.json());

// POST /api/echo に対して、message をそのまま返す
app.post("/api/echo", (req, res) => {
  const message = req.body.message;
  const source = req.body.source || "unknown";
  const lineno = req.body.lineno || 0;
  const colno = req.body.colno || 0;
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Origin", "https://login.dds.click");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", true);
  res.json({
    message: message,
    source: source,
    lineno: lineno,
    colno: colno,
  });
  console.log(`Received message: ${message}, source: ${source}, lineno: ${lineno}, colno: ${colno}`);
});

app.options("/api/echo", (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://login.dds.click");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Credentials", true);
  res.sendStatus(200);
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
