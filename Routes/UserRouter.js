const express = require("express");
const router = express.Router();
const UserController = require("../Controller/UserController.js");

router.post("/userpost", UserController.UserPost);
router.get("/usergetall", UserController.GetUserData);
router.put("/update/:id", UserController.UserUpdate);
router.delete("/delete/:id", UserController.DeleteUser);

module.exports = router;
