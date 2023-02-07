import React,{useState} from 'react'
export const AddCategory = ({categories,setcategories,onNewCategory}) => {

    const [inputValue, setinputValue] = useState('')
    
    const onInputChange=({target})=>{
        setinputValue((target.value)) 
    }
    
    const onSubmit = (event)=>{
        event.preventDefault()
        if(inputValue.trim().length<=1)return
        onNewCategory(inputValue)
        setinputValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" name="find" id="find" placeholder='Write something...' value={inputValue} onChange={onInputChange} />
            <button>Find</button>
        </form>
    )
}
