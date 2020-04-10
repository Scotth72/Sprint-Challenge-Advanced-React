import React from 'react';
import Players from './Players';
import { useCallPlayers} from '../hooks/CallPlayer';

const Team = () => {
    const [data] = useCallPlayers('http://localhost:5000/api/players')
    return(
        <div>
            {data.map(item => {
                return <Players key={item.id} data={item} />
            })}
        </div>
    )
}

export default Team;