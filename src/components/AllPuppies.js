import React from "react";

const AllPuppies = (props) => {
  console.log('All Puppies props:', props);
  return (
    <>
    {props.allPuppies.map((puppy) => {
      // console.log(puppy); 
      return (
        
        <div className="single-player-card" key={puppy.id}>
          <div className="header-info">
            <p className="pup-title">{puppy.name}</p>
            <p className="pup-number">#{puppy.id}</p>
          </div>
          <img src={puppy.imageUrl} alt= "photo" /> 
          <button className="detail-button" data-id={puppy.id}>See details</button>
          <button className="delete-button" data-id={puppy.id}>Remove from roster</button>
        </div>  
        );
      })} 
       </>
      );
    };
    
    
    

export default AllPuppies;

/* 'props' in an object comes over from 'Main' module from the "allPuppies" object. Within 'allPuppies' object is an array which we can use to pull out information about each pup.  
    - We then .map 'allPuppies' and store it into a new object called 'puppy' where we can use this to pull out 
    information needed for name, id, etc. on each player. .map goes through each object and creates a 'card' for each one to display 
    - <> </> to encase all of the JSX within the 'return' of AllPuppies. 



*/