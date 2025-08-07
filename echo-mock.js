// echo-mock.js
const express = require("express");
const app = express();
const PORT = 3000;

// JSONボディをパースするためのミドルウェア
app.use(express.json());

// POST /api/echo に対して、message をそのまま返す
app.post("/api/echo", (req, res) => {
  const message = req.body.message;
  res.json({
    echo: message,
  });
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`Mock server is running at http://localhost:${PORT}`);
});
