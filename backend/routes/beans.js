const { Router } = require("express");
const router = new Router();
const fs = require("fs");
const uuid = require("uuid-random");
const { generateOrderNr, generateETA } = require("../utils/utils");
const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("db.json");
const db = low(adapter);

router.get("/", async (req, res) => {
  const menu = fs.createReadStream("data/menu.json");
  menu.pipe(res);
});

router.post("/", async (req, res) => {
  //Post order och få tillbacka ETA och ordernummer
  const order = {
    eta: generateETA(),
    orderNr: generateOrderNr()
  };

  console.log(req.body.id);

  // Lägg till orderar i db.json
  db.get("orders")
    .push({
      user: req.body.id,
      orderNumber: order.orderNr,
      timeStamp: Date.now(),
      items: req.body.items,
      totalValue: req.body.value
    })
    .write();

  console.log(db.get(req.body.id).value());

  setTimeout(() => {
    res.send(order);
  }, 2000);
});

router.get("/key", (req, res) => {
  // Generera uuid
  const key = {
    key: uuid()
  };
  res.send(JSON.stringify(key));
});

// Hämta ordrar via user id
router.get("/profile/:id", (req, res) => {
  let orders = db
    .get("orders")
    .filter({ user: req.params.id })
    .value();

  console.log(orders);

  res.send(orders);
});

module.exports = router;
