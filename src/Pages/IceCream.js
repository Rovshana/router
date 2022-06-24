import React from 'react'
import icecream from '../Image/icecream.jpg'
import { useNavigate } from 'react-router-dom'

export function IceCream(props) {
    
let navigate = useNavigate()
    return (
        <>
            <h1>Yummyyy :)</h1>
            <img src={icecream} alt='...'/>
            <button onClick={()=>{navigate('/menulist')}}>Go to the back</button>

        </>
    )
}
