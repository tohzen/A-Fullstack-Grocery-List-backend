  
const express = require("express");
const router = express.Router();

const {
  getAllGroceries,
  createGrocery,
  updateGroceryByID,
  deleteGrocery,
  updateGroceryDone,
  sortGroceryByDate,
  sortGroceryByDone,
} = require("./Controller/groceryController");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/get-all-groceries", getAllGroceries);

router.post("/create-grocery", createGrocery);

router.put("/update-grocery-by-id/:id", updateGroceryByID);

router.delete("/delete-grocery-by-id/:id", deleteGrocery);

router.put("/update-purchased-by-id/:id", updateGroceryDone);

router.get("/get-grocery-by-sort", sortGroceryByDate);

router.get("/get-grocery-by-purchased", sortGroceryByDone);
module.exports = router;