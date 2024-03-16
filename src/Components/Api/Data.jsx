import React from 'react'

export async function generateMemes() {
    const res = fetch("https://api.imgflip.com/get_memes").then((response) => response.json())
    console.log(res)
    return res;



}