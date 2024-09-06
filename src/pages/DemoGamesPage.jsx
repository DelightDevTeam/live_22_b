import React, { useEffect, useState } from 'react';
import BASE_URL from '../hooks/baseURL'; // Replace with your actual base URL

const DemoGamesPage = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to launch the game
  const launchGame = (gameCode) => {
    const launchUrl = `${BASE_URL}/LaunchGameDemo?gameCode=${gameCode}`;
    window.open(launchUrl, '_blank'); // Open the game in a new tab
  };

  useEffect(() => {
    // Fetch the game list from the API
    const fetchGames = async () => {
      try {
        const response = await fetch(`${BASE_URL}/DemoGameList`, {
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

  if (loading) {
    return <p>Loading games...</p>;
  }

  return (
    <div className='p-3 p-sm-4'>
      <div className='row mt-4'>
        {games?.map((game, index) => {
          return (
            <div
              key={index}
              className='col-4 col-md-3 col-lg-2 px-1 px-md-3 mb-sm-4 cursor-pointer'
              onClick={() => launchGame(game.GameCode)} // Launch game on click
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
          );
        })}
      </div>
    </div>
  );
};

export default DemoGamesPage;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import BASE_URL from '../hooks/baseURL'; // Replace with your actual base URL

// const GamesPage = () => {
//   const [games, setGames] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Fetch the game list from the API
//     const fetchGames = async () => {
//       try {
//         const response = await fetch(`${BASE_URL}/DemoGameList`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//         });

//         const data = await response.json();

//         if (data && data.Game) {
//           setGames(data.Game);
//         } else {
//           console.error('Failed to fetch game list');
//         }
//       } catch (error) {
//         console.error('Error fetching games:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGames();
//   }, []);

//   if (loading) {
//     return <p>Loading games...</p>;
//   }

//   return (
//     <div className='p-3 p-sm-4'>
//       <div className='row mt-4'>
//         {games?.map((game, index) => {
//           return (
//             <div
//               key={index}
//               className='col-4 col-md-3 col-lg-2 px-1 px-md-3 mb-sm-4 cursor-pointer'
//             >
//               <div className='p-1 rounded-3'>
//                 <img
//                   src={game.ImageUrl}
//                   alt={game.GameName}
//                   className='img-fluid gameImg rounded-3'
//                 />
//                 <p className='gameName'>{game.GameName}</p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default GamesPage;
