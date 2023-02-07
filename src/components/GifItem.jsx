import React from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'

export const GifItem = ({title,url,id}) => {
    return (
    <div className='card'>
        <img src={url} alt={title}/>
        <p>{title}</p>
        <CopyToClipboard text={url}>
            <button onClick={()=>alert('Copied!!')}>Copy</button>
        </CopyToClipboard>
    </div>
    )
}
