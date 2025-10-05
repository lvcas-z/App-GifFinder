import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { Footer } from './components/Footer'
import { GifGrid } from './components/GifGrid'

export const GifFinderApp = () => {
    const apiKey = import.meta.env.VITE_FIREBASE_API_KEY
    const [categories, setcategories] = useState([])

    const onAddCategory = (newCategory) =>{
        if(categories.includes(newCategory))return
        setcategories([newCategory])
    }
    return (
    <>
        <h1 onClick={()=>location.reload()}>Gif Finder App</h1>
        <AddCategory onNewCategory={onAddCategory}/>
        {categories.map( category =><GifGrid key={category} category={category} />)}
        <Footer/>
    </>
    )
}
