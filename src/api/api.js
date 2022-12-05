// API call below
export const getPlayers = async (setPlayers) => {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/players"
    );
    const data = await response.json();
    // console.log('api call ', data);
    setPlayers(data.data.players);
    // Above is taking the data we pull from the API and using 'data' as an argument in 'setPlayers' and passing the data to the 'players' parameter above in 'useState'
    // data.player allows us to return 'data' as the actual array of players and not the other objects that are in the api. It only pulls the 'data' and 'players' object (which holds the array)
  } catch (error) {
    console.error(error);
  }
};


export const getSinglePlayer = async (setSelectedPlayers, playerId) => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2211-ftb-et-web-ft/players/${playerId}`
      );
      const data = await response.json();
      // console.log(data);
      setSelectedPlayers(data.data.player);
      // Above is taking the data we pull from the API and using 'data' as an argument in 'setPlayers' and passing the data to the 'players' parameter above in 'useState'
      // data.player allows us to return 'data' as the actual array of players and not the other objects that are in the api. It only pulls the 'data' and 'players' object (which holds the array)
    } catch (error) {
      console.error(error);
    }
  };




// setPlayers is passed into 'getPlayers' function and is called again later once the data is fetched and 
// the data is able to get attached to it. 'data' eventually becomes 'players' on Main.js