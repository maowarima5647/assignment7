import React, { useEffect, useState } from 'react';
import Players from './players';
const Allplayers = ({ handleprice }) => {
    const [players, setPlayers] = useState([]);


    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setPlayers(data))

    }, [])
    return (
        <div>
            <h3 className='text-2xl font-bold'>Available Players</h3>

            <div className='grid grid-cols-2 w-full'>

                {players.map((p) => <Players handleprice={handleprice} key={p.id} player={p}></Players>)
                }
            </div>
        </div>
    );
};

export default Allplayers;