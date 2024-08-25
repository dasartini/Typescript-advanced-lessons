import {faker} from '@faker-js/faker';
import { addProduct, products, updateProduct } from "./products/product.service";
import { Category } from "./categories/categories.model";


for (let index = 0; index < 50; index++) {
  addProduct({
    description: faker.commerce.productDescription(),
    image: faker.image.url(),
    color: faker.color.human(),
    price: parseInt(faker.commerce.price(), 10),
    isNew: faker.datatype.boolean(),
    tags: [faker.lorem.word(), faker.lorem.word(), faker.lorem.word()],
    size: faker.helpers.arrayElement(['S', 'L', 'M', 'XL']),
    title: faker.commerce.productName(),
    stock: faker.datatype.number({ min: 10, max: 100 }),

   categoryId: faker.string.uuid()
  });
}


console.log(products)
const exampleProduct= products[0]
updateProduct(exampleProduct.id,{
title: "New title",
stock:90,


})