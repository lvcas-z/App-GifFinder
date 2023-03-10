import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({category}) => {
    const{images} = useFetchGifs(category)
    return (
    <>
        <h3>{category}</h3>
        <div className='card-grid '>
            {images.map((image)=>{
                return <GifItem key={image.id} {...image}/>
            })}
        </div>
    </>
    )
}
