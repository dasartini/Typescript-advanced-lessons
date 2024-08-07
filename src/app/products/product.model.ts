import { Category } from "../categories/categories.model";
import { BaseModel } from "../users/base.model";
export type Sizes = 'S' | 'M' | 'L' | 'XL';


export interface Product extends BaseModel {
    stock: number,
    title: string ,
    size?: Sizes,
    category : Category
}