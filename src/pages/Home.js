import React, { useEffect } from 'react';
import GameDetail from '../components/GameDetail';
import { useLocation } from 'react-router-dom';
// redux
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';
// styles and animation
import styled from 'styled-components';
import { motion } from 'framer-motion';
// components
import Game from '../components/Game';

function Home() {
    // get the current Location 
    const location = useLocation()
    const pathId = location.pathname.split('/')[2]
    
    // fetch games
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(loadGames())
    }, [dispatch])

    // get data back
    const { popular, newGames, upcoming } = useSelector(state => state.games)


    return (
        <GameList>
            {pathId && <GameDetail />}
            <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map(game => (
                        <Game 
                            name={game.name} 
                            released={game.released} 
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {popular.map(game => (
                        <Game 
                            name={game.name} 
                            released={game.released} 
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map(game => (
                        <Game 
                            name={game.name} 
                            released={game.released} 
                            id={game.id}
                            image={game.background_image}
                            key={game.id}
                        />
                    ))}
                </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`

export default Home
