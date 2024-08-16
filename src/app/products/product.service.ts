import { Product } from "./product.model"
import { CreateProductDto } from "./product.dto"

export const products : Product[] = []



export const addProduct = (data : Product) =>{
    

products.push(data)
}
