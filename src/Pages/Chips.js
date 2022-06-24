import React from 'react'
import Lays from '../Image/Lays.jpg'
import { useNavigate } from 'react-router-dom'

export function Chips(props) {
    let navigate = useNavigate()

    return (
        <>
     <h4>Chips!!!</h4>
     <img src={Lays} alt="..."  />
     <button onClick={()=>{navigate('/menulist')}}>Go to the back</button>
            
        </>
    )
}
