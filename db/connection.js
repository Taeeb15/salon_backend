let {MongoClient}=require("mongodb")
require("dotenv").config()
let url=process.env.MONGODB_URL

let connectDB= async ()=>{
    let client= await MongoClient.connect(url)
    let db=client.db("SalonDB")
    console.log("Database Conneted");
    return db
}
module.exports={connectDB}