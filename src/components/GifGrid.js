/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useFetchGits } from '../components/hooks/useFetchGits'
import GifItems from './GifItems'
import '../index.css'

const GifGrid = ({category}) => {
    
    const { data:images, loading} = useFetchGits( category )

    return (
        <>
            <h3 className="animate__animated animate__fadeIn">{category}</h3>

            {
                loading && <p className="animate__animated animate__flash">Cargando...</p>
            }
            <div className='card-grid'>
            
                {
                    images.map( img => (
                        <GifItems
                            key= { img.id }
                            img={ img }
                        />
                    ))
                }
            </div>
        </>
    )
}
export default GifGrid