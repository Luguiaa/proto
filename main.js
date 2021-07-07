const express = require("express"),
  app = express(),
  fs = require("fs");

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/static/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("main");
});

app.get("/store", (req, res) => {
  res.render("store");
});

app.get("/account", (req, res) => {
  res.render("account");
});

app.get("/checkout", (req, res) => {
  res.render("checkout");
});

app.get("/details", (req, res) => {
  res.render("details");
});

app.post("/api/receiveInterestData", (req, res) => {
  console.log(req.body);
  try {
    fs.writeFileSync(
      __dirname + "/fakeapi/users.json",
      JSON.stringify(req.body),
      () => {
        return;
      }
    );
  } catch (e) {
    res.json({ success: false, status: 500 });
    throw e;
  }
  res.json({ success: true, status: 200 });
});

app.listen(3000);
