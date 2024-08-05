export const createProduct =(

    id: string | number,
    isNew : boolean =true,
    stock : number = 10,
)=>{
    return{
        id,
        stock: stock ,
        isNew : isNew,
    }
}

const product1 = createProduct(1, true)
const product2 = createProduct(2)
const product3 = createProduct(3,false, 0)


console.log(product1, product2, product3)
