import React, { useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Text from '../Card/Text';
import { exportComponentAsJPEG } from 'react-component-export-image';
const Edit = () => {
    const [count, setCount] = useState(0);
    const [searchParams] = useSearchParams();
    const memeref = useRef();
    const addText = () => {
        setCount(count + 1)

    }


    return (
        <>
            <div >
                <div ref={memeref} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">

                    <img
                        src={searchParams.get('url')} />



                </div>

                {
                    Array(count).fill(0).map((e) => <Text />)
                }


                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={addText}>Edit</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => exportComponentAsJPEG(memeref)}> Save</button>


            </div >
        </>
    )
}

export default Edit
