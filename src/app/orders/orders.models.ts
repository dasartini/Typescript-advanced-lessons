import { Product } from "../products/product.model";
import { User } from "../users/users.models";
import { BaseModel } from "../base.model";

export interface Order extends BaseModel {
    products : Product[];
    user: User;
}