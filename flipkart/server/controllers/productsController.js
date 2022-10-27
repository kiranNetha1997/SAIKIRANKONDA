import Product from "../model/productSchema.js";


export const getProducts = async (request, response) => {
        try {
            const products = await Product.find({});
    
            response.send(products);
        }catch (error) {
    
        }
    }