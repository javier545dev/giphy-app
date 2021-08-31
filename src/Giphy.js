 import React, { useState } from 'react'
 import AddSearch from './components/AddSearch'
 import GifGrid from './components/GifGrid'

 const Giphy = () => {

     //const categorias = [ 'Dragon Ball', 'Naruto', 'Bleach']
    // eslint-disable-next-line no-unused-vars
    const [categories, setCategories] = useState(['Naruto'])

    //const handleAdd = () => {
         //setCategorias ([ ...categorias, "HunterX"])
         //setCategorias ( cats => [...categories, "HunterX"])
    //}
     return ( 
         <>
            <h2>GiphyBrowser</h2>
            <hr />
            <AddSearch setCategories={setCategories} />
            <ol>
                { categories.map( category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                    ))
                }
            </ol>
         </>
     )
 } 
 
 export default Giphy
 