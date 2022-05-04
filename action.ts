import {Action} from "@ngrx/store";
export enum CartActionTypes{
    ADD_PRODUCT = 'ADD_PRODUCT',
    REMOVE_PRODUCT = 'REMOVE_PRODUCT'
}
export class AddProduct implements Action{
    readonly type = CartActionTypes.ADD_PRODUCT
    constructor(public payload:any){}
}
export type CartActions = AddProduct | RemoveProduct