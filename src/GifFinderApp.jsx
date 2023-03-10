import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { Footer } from './components/Footer'
import { GifGrid } from './components/GifGrid'

export const GifFinderApp = () => {
    const apiKey = 'RglSMFKJLvS78G5BXIPSW9Io6BKvilK4'
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
