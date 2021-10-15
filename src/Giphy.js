 import React, { useState } from 'react'
 import AddSearch from './components/AddSearch'
 import GifGrid from './components/GifGrid'
 import './index.css'

 const Giphy = () => {

     //const categorias = [ 'Dragon Ball', 'Naruto', 'Bleach']
    // eslint-disable-next-line no-unused-vars
    const [categories, setCategories] = useState([''])

    //const handleAdd = () => {
         //setCategorias ([ ...categorias, "HunterX"])
         //setCategorias ( cats => [...categories, "HunterX"])
    //}
     return ( 
         <>
            <div className='title'>
                <h2>GiphyBrowser</h2>
                <hr />
            </div>

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
 