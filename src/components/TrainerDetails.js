import React, {useEffect, useState} from 'react'
import { useParams, NavLink } from 'react-router'
import { baseUrl } from '../globals'

const TrainerDetails = () => {
    const [trainer, setTrainer]= useState(null);
    const { id }= useParams()

    useEffect(()=>{
        const Trainer= async() => {
            const resp= fetch(`${baseUrl}/trainers/${id}`)
            const data= resp.json();
            setTrainer(data);
        }
    }, [id])
    
    const removeTrainer= id=> {
        setTrainer({
            ...trainer
        })
    }

    const deleteTrainer= async id=> {
        fetch(`${ baseUrl }/trainers/${ id }`, { method: "DELETE"})
        removeTrainer( id )
    }

    // const trainerCard= trainer.map()

    return (

        <div>
            <h1>Trainer Details</h1>
            <button onClick={ ()=> deleteTrainer(trainer.id) }>Delete Trainer</button>
        </div>
    )
}

export default TrainerDetails
