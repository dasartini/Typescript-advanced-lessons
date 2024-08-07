import { addProduct } from "./products/product.service";
import { Category } from "./categories/categories.model";


addProduct({
id: '1',
title: "Vinto can",
createdAt: new Date(),
stock: 90,
category : {
    id: '2',
    name : 'Drinks'
}
})