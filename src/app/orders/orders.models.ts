import { Product } from "../products/product.model";
import { User } from "../../01-enum";
import { BaseModel } from "../users/base.model";

export interface Order extends BaseModel {
    products : Product[];
    user: User;
}