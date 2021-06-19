const express=require('express');
const app=express();
const connectDB=require('./config/db');
const cors=require('cors');
const prodRoute= require('./routes/productRouter');
const port = 30001;
app.use(cors());
connectDB();
app.use(express.json());
app.use('/products',prodRoute);
app.use("/", (req, res, next) => {
  res.send("hello world");
});
app.listen(port,() => {
  console.log(`app is listening on port ${port}`);
})