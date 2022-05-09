import React from 'react';
import {NewItemForm} from "./NewItemForm";
import {Product} from "../../models/Product";
import {ItemsList} from "./ItemsList";
import {useLocalStorage} from "../Hooks/LocalStorage";


function ShoppingListApp() {

    const [items, setItems] = useLocalStorage('itemsList', []);

    const addProduct = (product: Product) => {
        setItems([...items, product]);
    }

    const toggleBought = (id: string) =>{
        const updatedItems = items.map( (item: Product) => {
            if(item.id === id){
                item.bought = !item.bought;
            }
            return item;
        })
        setItems(updatedItems);
    }

    const clearList = () => {
        setItems([]);
    }
    return (
        <div className="ShoppingApp">
            <NewItemForm addProductFn={addProduct}/>
            <ItemsList items={items} toggleBoughtFn={toggleBought} clearListFn={clearList}/>
        </div>
    );
}

export default ShoppingListApp;
