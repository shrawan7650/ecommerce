const expresss = require("express");
const router = expresss.Router();
const { requiredVerified, isAdmin } = require("../middlerwares/authMiddleWere");
const {
  registerController,
  loginController,
  emailSend,
  changePassword
} = require("../controllers/authControllers");

//routing
//Register  user
router.post("/register", registerController);
// login user
router.post("/login", loginController);




//forget -password
router.post('/email-send',emailSend)


router.post('/change-password',changePassword)

// protected route
router.get('/user-auth',requiredVerified,(req,res)=>{
  res.status(200).send({ok:true})
})
router.get('/admin-auth',requiredVerified,isAdmin,(req,res)=>{
  res.status(200).send({ok:true})
})


module.exports = router;
