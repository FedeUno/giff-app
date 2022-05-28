import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Spiderman']);

    return (
        <>
            <h1>•. Gif Finder .•</h1>             
            <AddCategory setCategories={ setCategories } />     
            <br />
            <ol>
                {
                    categories.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />                        
                    ))
                }
            </ol>
        </>

    )
}
