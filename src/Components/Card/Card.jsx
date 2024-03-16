import React from 'react'
import { useNavigate } from 'react-router-dom';

const Card = (props) => {
    const navigate = useNavigate()

    return (
        <>
            <div className="bg-gray-100 min-h-screen flex items-center justify-center coloumn-3">
                <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
                    <img
                        src={props.image}

                        className="w-full h-48 object-cover mb-4 rounded-md"
                    />

                    <h2 className="text-xl font-semibold text-gray-800 mb-2">{props.title}</h2>

                    <button className='w-full h-12 rounded-md bg-blue-600 text-white ' onClick={(e) => navigate(`/edit?url=${props.image}`)}
                        variant='primary'>
                        Edit
                    </button>

                </div>

            </div>
        </>
    );
};

export default Card
