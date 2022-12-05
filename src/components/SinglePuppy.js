import React from "react";

const SinglePuppy = (selectedPlayers) => {
  // console.log('Single Puppy props: ',props);
  if (!(selectedPlayers.length) ){
    return (<div>ssss</div>) ;
  }
  // returns a string if an empty array tries to be passed through (if the api call isn't ready yet)
  return (
    
    <div class="single-player-view">
      <div class="header-info">
        <p class="pup-title">${selectedPlayers.name}</p>
        <p class="pup-number">#${selectedPlayers.id}</p>
      </div>
      <p>Team: {selectedPlayers.team ? selectedPlayers.team.name : 'Unassigned'}</p>
      <p>Breed: {selectedPlayers.breed}</p>
      {/* <img src={selectedPlayers.imageUrl} alt= {'photo of ' + {selectedPlayers.name}}/> */}
      <button id="see-all">Back to all players</button>

    
      </div>

  );
};



export default SinglePuppy;
