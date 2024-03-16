import React, { useState } from 'react'

const Text = () => {
    const [text, setText] = useState('Click here to edit');
    const [edit, setEdit] = useState(false)
    // const handleSave = (newText) => {
    //     setText(newText);
    // };
    return (
        <div>
            {
                edit ? (
                    <input
                        onDoubleClick={(e) => setEdit(false)}
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                ) : (
                    <h1 onDoubleClick={(e) => setEdit(true)}>
                        {text}

                    </h1>
                )
            }

        </div>
    )
}

export default Text
