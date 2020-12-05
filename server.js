const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static("Public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
    {
        customerName: "Reservation",
    phoneNumber: 1234567899,
    customerEmail: "test@gmail.com",
    customerID: 1234,
    }
]

const waitList = [
    {
        customerName: "Waitlist",
    phoneNumber: 1234567899,
    customerEmail: "test@gmail.com",
    customerID: 1234,
    }
]



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


app.post("/api/reservations", (req, res) => {
  const newReservation = req.body;
  
   
    if (reservations.length < 5) {
      reservations.push(newReservation);
      console.log("Reservation Added!");
      return res.json(newReservation);
    } else {
        waitList.push(newReservation);
    res.json(newReservation);
    console.log(
      "Sorry, We have too many reservations, you have been added to the waitlist"
    );}
  
  
});

app.post("/api/waitlist", (req, res) => {
  const newWaitList = req.body;

  waitList.push(newWaitList);
  res.json(newWaitList);
});


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

