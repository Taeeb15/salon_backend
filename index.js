let express=require("express");
const { connectDB } = require("./db/connection");
const { fetchCategorires } = require("./apis/users/FetchCategories");
let app=express()
app.use(express.json())

app.get("/categories",fetchCategorires)
connectDB()
app.listen(8000,()=>{
    console.log("Server running on port 8000");
    
})