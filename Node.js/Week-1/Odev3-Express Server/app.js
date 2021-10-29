const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>Merhaba ...  Ana sayfaya hosgeldiniz.</h1>");
});
app.get("/index", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1>suanda index sayfasindasiniz</h1>");
});

app.get("/contact", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(
    "<h2>Contact Information</h2> <p>Furkan AKTAS - furkanakt21@gmail.com</p>"
  );
});

app.get("/about", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h2>About</h2> <p>Furkan AKTAS</p> <p>FullStack Developer</p>");
});

app.get("*", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("<h1> 404 - SAYFA BULUNAMADI</h1>");
});

app.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalışıyor.`);
});
