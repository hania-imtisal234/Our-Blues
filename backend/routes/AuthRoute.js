const {
  Signup,
  Login,
  SignupTherapist,
  LoginTherapist,
} = require("../controllers/authController");
const router = require("express").Router();
const {
  updateDetails,
  updateUserDetails,
  changePassword,
} = require("../controllers/updateController");
const {
  userVerification,
  therapistVerification,
} = require("../Middlewares/AuthMiddleware");
const checkoutController = require("../controllers/checkoutController");
const { supportGroup } = require("../controllers/chatController");
const { getChat } = require("../Middlewares/chatMiddleware");
const { getUsers, getUserByEmail } = require("../Middlewares/UsersMiddleware");
const { bookAppointment } = require("../controllers/appointmentController");
const {
  getTherapists,
  getTherapistsById,
} = require("../Middlewares/TherapistsMiddleware");

const { UploadImage } = require("../controllers/UploadController");
const upload = require("../Middlewares/MulterMiddleware");

const { AppChatBot } = require("../chatbot/chatbot");

//WEBAPP
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);
router.get("/", userVerification);
router.get("/getChat", getChat);
router.get("/getUsers", getUsers);
router.get("/getUsersByEmail", getUserByEmail);
router.get("/getTherapistById/:id", getTherapistsById);
router.post("/saveChat", supportGroup);
router.get("/getTherapists", getTherapists);
router.post("/bookAppointment", bookAppointment);
router.post("/chatbot", AppChatBot);
router.post(
  "/api/create-checkout-session",
  checkoutController.createCheckoutSession
);

//BACKOFFICE

router.post("/signupTherapist", SignupTherapist);
router.post("/loginTherapist", LoginTherapist);
router.post("/therapist", therapistVerification);
router.get("/therapist", therapistVerification);
router.post("/updateDetails", updateDetails);
router.post("/updateUserDetails", updateUserDetails);
router.post("/updatePassword", changePassword);
router.post("/upload", upload.single("file"), UploadImage);

module.exports = router;
