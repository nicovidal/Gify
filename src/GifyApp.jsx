import { AddCategory } from "./components/AddCategory"
import { GifGrid } from "./components/GifGrid";
import { useState } from "react";

export const GifyApp=()=> {

    const [categories, setcategories] = useState(['One Punch']);

    const onAddCategory=(newCategory)=>{

        if(categories.includes(newCategory))return;
        setcategories([newCategory,...categories]);
    }


    return (
        <div>
            <h1>Gify</h1>
            <p>Busca tu gifs favoritos</p>
            <AddCategory onNewCategory={(value)=>onAddCategory(value)}/>
            {
                categories.map((category)=>(
                    <GifGrid
                    key={ category }
                    category={category}/>
                ))
            }
        </div>
    )
}

