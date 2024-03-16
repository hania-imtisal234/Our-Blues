const { Signup, Login } = require("../controllers/authController");
const router = require("express").Router();
const {
  updateDetails,
  changePassword,
} = require("../controllers/updateController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const checkoutController = require("../controllers/checkoutController");
const { supportGroup } = require("../controllers/chatController");
const { getChat } = require("../Middlewares/chatMiddleware");
const { getUsers } = require("../Middlewares/UsersMiddleware");
const { bookAppointment } = require("../controllers/appointmentController");

router.post(
  "/api/create-checkout-session",
  checkoutController.createCheckoutSession
);
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);
router.get("/", userVerification);
router.post("/updateDetails", updateDetails);
router.post("/updatePassword", changePassword);
router.post("/saveChat", supportGroup);
router.get("/getChat", getChat);
router.get("/getUsers", getUsers);
router.post("/bookAppointment", bookAppointment);
module.exports = router;
