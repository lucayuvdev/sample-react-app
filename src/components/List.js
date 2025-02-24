import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function List () {

    const navigate = useNavigate(); 

    useEffect( () => {
        const token = localStorage.getItem('token')
        console.log("🚀 ~ file: List.js:8 ~ List ~ token:", token)
        
        if(token === null) {
            navigate('/');
        }
    })

    return (
        <h2>
            List Component
        </h2>
    )
}

export default List;