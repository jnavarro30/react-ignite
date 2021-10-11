import React, { useEffect } from 'react';
// redux
import { useDispatch } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

function Home() {
    // fetch games
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(loadGames())
    })

    return (
        <div className='Home'>
            <h1>Home</h1>
        </div>
    )
}

export default Home
