import React, { useState } from 'react'
import { supabase } from '../client'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = (props) => {
    // Initialize count with the betCount from database, default to 0
    const [count, setCount] = useState(props.betCount || 0)

    // UPDATE bet count function
    const updateCount = async (event) => {
        event.preventDefault();
        
        try {
            // Update the database - increment betCount by 1
            const { error } = await supabase
                .from('Posts')
                .update({ betCount: count + 1 })
                .eq('id', props.id);
            
            if (error) {
                console.error('Error updating bet count:', error);
                return;
            }
            
            // Update the local state only if database update was successful
            setCount(count + 1);
        } catch (err) {
            console.error('Error in updateCount:', err);
        }
    }

    return (
        <div className="Card">
            <h2>{props.title}</h2>
            <h3>by {props.author}</h3>
            <p>{props.description}</p>
            
            <div className="card-actions">
                <button className="betButton" onClick={updateCount}>
                    👍 Bet ({count})
                </button>
                
                <Link to={`/edit/${props.id}`}>
                    <button className="editButton">⋮</button>
                </Link>
            </div>
        </div>
    )
}

export default Card