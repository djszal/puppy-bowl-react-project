import React from "react";

const SinglePuppy = (props) => {
  // console.log('Single Puppy props: ',props);
  if (!(props.pup.length) ){
    return (<div>ssss</div>) ;
  }
  // returns a string if an empty array tries to be passed through (if the api call isn't ready yet)
  return (
    
    <div>
         {/* <h1>Name: {props.pup[2].name}</h1> */}
         {/* Dont refresh browser page or above will make it angry for some reason.. */}

    
      </div>

  );
};



export default SinglePuppy;
