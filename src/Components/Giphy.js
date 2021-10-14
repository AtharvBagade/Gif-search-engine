import React from 'react';
import  { useState } from "react";
import { useEffect } from 'react';

export const Giphy = (props) => {

    const [state,setState]=useState({
        
        data:[],
        pagination:[],
        meta:[]
    })

    const search_query = "dogs";

    useEffect(() => {
        
     let api ="yPnwrH8lyHgS1j99J6Mg091Z8OX7VVQ8";

    fetch(api + ".giphy.com/gifs/search/" + search_query )
    .then(res => res.json())
    .then((data) =>{
        setState(() =>({
            data:data.data,
            pagination:data.pagination,
            meta:data.meta
        })
    )})
    
    });    
    
    
    return
    (
        <div className=""></div>
    )
}
