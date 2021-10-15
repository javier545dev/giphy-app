import { useEffect, useState } from 'react'
import { getGif } from '../api/Api'

export const useFetchGits = ( category ) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect (() => {
        getGif( category )
        .then( imgs => {
                console.log(imgs);
                setState({
                    data: imgs,
                    loading: false
                })
        })
    }, [category])
    return state
}