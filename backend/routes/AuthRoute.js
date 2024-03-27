const {
  Signup,
  Login,
  SignupTherapist,
  LoginTherapist,
} = require("../controllers/authController");
const router = require("express").Router();
const {
  updateDetails,
  changePassword,
} = require("../controllers/updateController");
const {
  userVerification,
  therapistVerification,
} = require("../Middlewares/AuthMiddleware");
const checkoutController = require("../controllers/checkoutController");
const { supportGroup } = require("../controllers/chatController");
const { getChat } = require("../Middlewares/chatMiddleware");
const { getUsers } = require("../Middlewares/UsersMiddleware");
const { bookAppointment } = require("../controllers/appointmentController");
const {getTherapists}=require("../Middlewares/TherapistsMiddleware");

const { UploadImage } = require("../controllers/UploadController");
const upload = require("../Middlewares/MulterMiddleware");

const {AppChatBot} = require("../chatbot/chatbot")

router.post(
  "/api/create-checkout-session",
  checkoutController.createCheckoutSession
);
router.post("/signup", Signup);
router.post("/signupTherapist", SignupTherapist);
router.post("/login", Login);
router.post("/loginTherapist", LoginTherapist);
router.post("/", userVerification);
router.get("/", userVerification);
router.post("/therapist", therapistVerification);
router.get("/therapist", therapistVerification);
router.post("/updateDetails", updateDetails);
router.post("/updatePassword", changePassword);
router.post("/saveChat", supportGroup);
router.get("/getChat", getChat);
router.get("/getUsers", getUsers);
router.get("/getTherapists", getTherapists);
router.post("/bookAppointment", bookAppointment);
router.post("/upload", upload.single("file"), UploadImage);

router.post("/chatbot", AppChatBot);

module.exports = router;
