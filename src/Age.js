import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

export const Age = () => {
    const [myAge,setMyAge] = useState(null);
    useEffect(() => {
        
    },[])

    const [name,setName] = useState('')

    const predictAge = () => {

        axios.get(`https://api.agify.io/?name=${name}`)
        .then(res => setMyAge(res.data.age))



    }


    return (
        <div>
            <input placeholder="Clinton" onChange={(event) => setName(event.target.value)} />
            <button onClick={predictAge}>Predict My Age</button>
            <p>Your Age Is: {myAge}</p>
        </div>
    )
} 