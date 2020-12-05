const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("Public"))

const reservations = [
  {
    customerName: "tables test",
  },
];

const waitList = [
  {
    customerName: "reservations test",
  },
];

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "home.html")));
app.get("/tables", (req, res) =>
  res.sendFile(path.join(__dirname, "tables.html"))
);
app.get("/reservations", (req, res) =>
  res.sendFile(path.join(__dirname, "reservation.html"))
);
app.use(express.static("Public"));

app.get("/api/reservations", (req, res) => res.json(reservations));
app.get("/api/waitlist", (req, res) => res.json(waitList));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
