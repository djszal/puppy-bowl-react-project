import React from "react";

const AllPuppies = (props) => {
  console.log({props});
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

/* 'props' comes over from 'Main' module from "allPuppies" 
    - 



*/