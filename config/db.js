const mongoDb=require('../constants/constants');
const mongoose=require('mongoose');
 const connectDb = async ()=>{ 
try{
  const conn = await mongoose.connect(mongoDb.Database.host,{
    useNewUrlParsers: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
  console.log("connection to db established",conn.connection.host);
}
catch(ex){
  console.log(ex);
}
}
module.exports=connectDb;