import { products } from "./data.js"
import Product from "./model/productSchema.js"


const DefaultData = async() =>{
       try{
        await Product.deleteMany({});
         await Product.insertMany(products)

       }
       catch(err){
        console.log(err.message)
       }
}

export default DefaultData;