import React from 'react';

const Players = ({data}) => {
    return(
        <div>
            <h2>Name: {data.name}</h2>
            <h2>Country: {data.country}</h2>
            <p>Searches: {data.searches}</p>
        </div>
    )

}

export default Players;