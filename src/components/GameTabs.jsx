import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../hooks/baseURL'; // Your actual base URL
import slot from '../assets/images/slot.png'; // Adjust this path to match your structure
import '../assets/css/games.css'; // Adjust this path to match your structure

const GameTabs = () => {
  const [selectedTab, setSelectedTab] = useState('slot');
  const navigate = useNavigate();

  const onGameClick = () => {
    navigate('/demo-games');
  };

  const tabs = [{ img: slot, name: 'Live22 Slots', value: 'slot' }];

  return (
    <div className='px-1 py-2 p-sm-3 p-lg-4'>
      <div
        className='d-flex align-items-start justify-content-start 
        flex-column gap-2'
        style={{ height: '100%' }}
      >
        <div className='px-2 pt-0 mt-0 w-full'>
          <div
            style={{ height: '100%' }}
            className='d-flex  
            justify-content-start
            align-items-center gap-3 gap-sm-5 ps-sm-3 w-full'
          >
            {tabs.map((tab, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    setSelectedTab(tab.value);
                    navigate('/');
                  }}
                  className={`py-2 px-2 px-sm-3 px-sm-4 gameTab cursor-pointer rounded-3 d-flex flex-column align-items-center justify-content-center ${
                    tab.value === selectedTab ? 'bgActive' : 'bg-gradient'
                  }`}
                >
                  <img src={tab.img} className='gameTabImg' alt={tab.name} />
                  <p className='gameText'>{tab.name}</p>
                </div>
              );
            })}
            <button
              onClick={onGameClick}
              className='mt-2 w-max py-3 px-5 h-max text-white demoPlay w-full rounded-5'
            >
              <h5 className='fw-semibold my-0 mx-sm-4 demoText'>Demo Play</h5>
            </button>
          </div>
        </div>
        <div className='px-2'>{selectedTab === 'slot' && <GamesPage />}</div>
      </div>
    </div>
  );
};

export default GameTabs;

// Games Page Component
const GamesPage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the game list from the API
    const fetchGames = async () => {
      try {
        const response = await fetch(`${BASE_URL}/GameLists`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (data && data.Game) {
          setGames(data.Game);
        } else {
          console.error('Failed to fetch game list');
        }
      } catch (error) {
        console.error('Error fetching games:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  // Function to launch the game
  const launchGame = async (gameCode) => {
    try {
      const response = await fetch(`${BASE_URL}/live22sm/GameLogin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Assuming the user token is stored in localStorage
        },
        body: JSON.stringify({
          game_code: gameCode,
          launch_demo: false, // Change this based on your requirement
        }),
      });

      const data = await response.json();

      if (data.status === 'Request was successful.') {
        // Redirect to the game URL
        window.location.href = data.message.url;
      } else {
        console.error('Failed to launch game');
      }
    } catch (error) {
      console.error('Error launching game:', error);
    }
  };

  if (loading) {
    return <p>Loading games...</p>;
  }

  return (
    <div className='p-3 p-sm-4'>
      <div className='row mt-4'>
        {games?.map((game, index) => (
          <div
            key={index}
            className='col-4 col-md-3 col-lg-2 px-1 px-md-3 mb-sm-4 cursor-pointer'
            onClick={() => launchGame(game.GameCode)}
          >
            <div className='p-1 rounded-3'>
              <img
                src={game.ImageUrl}
                alt={game.GameName}
                className='img-fluid gameImg rounded-3'
              />
              <p className='gameName'>{game.GameName}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
