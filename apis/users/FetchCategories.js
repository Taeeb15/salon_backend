const { connectDB } = require("../../db/connection")

let fetchCategorires= async (req,res)=>{
    try {
        let db=await connectDB()
        let collection=db.collection("category")
        let category_data=await collection.find({}).toArray()
        if (!category_data) {
                return res.status(400).send({success:false,message:"Category not found"})
        } else {
                return res.status(200).send({success:true,message:"Category found",category:category_data})

        }
    } catch (e) {
                return res.status(500).send({success:false,message:"Internal server error"})

    }
}
module.exports={fetchCategorires}