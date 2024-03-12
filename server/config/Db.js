const mongoose = require('mongoose');
 require('dotenv').config();
const dataSBaseConnection = async()=>{
 try{
 await mongoose.connect(process.env.DATA_Base_URL)
  console.log(`Data Base Connected`.bgGreen.black);
 }catch(err){
   console.error(`Error ${err}`.bgRed.white)
 }
}
module.exports=dataSBaseConnection;