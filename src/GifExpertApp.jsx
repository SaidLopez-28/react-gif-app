import { useState } from "react"
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  
    const [ categories, setCategories] = useState(['One punch man']);

    const onAddCategory = (newCategory) => {
      if(categories.includes(newCategory)) return;

      setCategories([newCategory,...categories]);
      //setCategories(cat => [ ...cat, 'One piece'])
    }
  
  return (
    <>
        <h1>Gif-App-504</h1>
        <AddCategory //setCategories={}
          onNewCategory={onAddCategory}
        />
        {
         categories.map( (category) => (<GifGrid key={category} category={category}/>))
        }  
    </>
  )
}  


