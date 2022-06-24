import React from 'react'
import drink from '../Image/cola.jpg'
import {useNavigate} from 'react-router-dom'

export function Cola(props) {
    let navigate = useNavigate()

    return (
        <>
           <h1 className='text-danger'>Coca-cola</h1> 
           <img src={drink} alt="..." />
           <button onClick={()=>{navigate('/menulist')}}>Go to the back</button>
        </>
    )
}
