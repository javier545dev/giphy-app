import React from 'react'
import '../index.css'

const GifItems = (props) => {  //({ img, title, url})

    //console.log(props.img) //console.log({id, title, url})


    return (
        <div className="card animate__animated animate__fadeIn">
            <img src={props.img.url} alt={props.img.title} />
            <p>{ props.img.title }</p>
        </div>
    )
}

export default GifItems


//<div>
    //<img src={url} alt={title} />
    //<p>{title}</p>
//</div>