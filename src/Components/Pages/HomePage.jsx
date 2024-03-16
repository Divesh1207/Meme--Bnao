import Card from "../Card/Card";
import React, { useEffect, useState } from 'react'


import { generateMemes } from "../Api/Data";

const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        generateMemes()
            .then((memes) => setData(memes.data.memes))
            .catch((error) => {
                console.error('Error fetching memes:', error);
                // Handle the error accordingly, e.g., show an error message to the user


            });
    }, []);

    return (
        <>
            {data.map((el) => (
                <Card key={el.id} image={el.url} title={el.name} />
            ))}
        </>
    );
};
export default HomePage
