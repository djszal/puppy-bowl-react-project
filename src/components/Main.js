import React, {useState, useEffect} from "react";
import AllPuppies from "./AllPuppies";
import SinglePuppy from "./SinglePuppy";
import {getPlayers, getSinglePlayer} from "../api/api";
import NavBar from "./NavBar"

// const puppies = [
//         {
//         "id": 9434,
//         "name": "Anise",
//         "breed": "Australian Cattle Dog / Labrador Retriever",
//         "status": "field",
//         "imageUrl": "http://r.ddmcdn.com/w_912/s_f/o_1/cx_51/cy_0/cw_912/ch_1368/APL/uploads/2019/12/Anise-PBXVI.jpg",
//         "createdAt": "2022-12-02T16:47:15.726Z",
//         "updatedAt": "2022-12-02T16:47:15.726Z",
//         "teamId": 550,
//         "cohortId": 292
//         },
//         {
//         "id": 9435,
//         "name": "Daphne",
//         "breed": "German Shepherd",
//         "status": "field",
//         "imageUrl": "http://r.ddmcdn.com/w_960/s_f/o_1/cx_25/cy_0/cw_960/ch_1440/APL/uploads/2020/01/Daphne-PBXVI.jpg",
//         "createdAt": "2022-12-02T16:47:15.726Z",
//         "updatedAt": "2022-12-02T16:47:15.726Z",
//         "teamId": 550,
//         "cohortId": 292
//         },
//         {
//         "id": 9437,
//         "name": "Duncan",
//         "breed": "Collie",
//         "status": "field",
//         "imageUrl": "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_49/cw_1012/ch_1518/APL/uploads/2020/01/Duncan-PBXVI-v2.jpg",
//         "createdAt": "2022-12-02T16:47:15.726Z",
//         "updatedAt": "2022-12-02T16:47:15.726Z",
//         "teamId": 550,
//         "cohortId": 292
//         },
//         {
//         "id": 9439,
//         "name": "Gina",
//         "breed": "Labrador Retriever / Chow Chow",
//         "status": "bench",
//         "imageUrl": "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Gina-PBXVI.jpg",
//         "createdAt": "2022-12-02T16:47:15.726Z",
//         "updatedAt": "2022-12-02T16:47:15.726Z",
//         "teamId": 550,
//         "cohortId": 292
//         },
//         {
//         "id": 9441,
//         "name": "Jack",
//         "breed": "Chihuahua / Miniature Poodle",
//         "status": "bench",
//         "imageUrl": "http://r.ddmcdn.com/w_926/s_f/o_1/cx_42/cy_0/cw_926/ch_1389/APL/uploads/2019/12/Jack-PBXVI.jpg",
//         "createdAt": "2022-12-02T16:47:15.726Z",
//         "updatedAt": "2022-12-02T16:47:15.726Z",
//         "teamId": 550,
//         "cohortId": 292
//         },
//         {
//         "id": 9433,
//         "name": "Bert",
//         "breed": "Great Pyrenees / Weimaraner",
//         "status": "field",
//         "imageUrl": "http://r.ddmcdn.com/w_1010/s_f/o_1/cx_0/cy_4/cw_1010/ch_1515/APL/uploads/2019/12/Bert-PBXVI.jpg",
//         "createdAt": "2022-12-02T16:47:15.726Z",
//         "updatedAt": "2022-12-02T16:47:15.726Z",
//         "teamId": 550,
//         "cohortId": 292
//         },
//         {
//         "id": 9436,
//         "name": "Crumpet",
//         "breed": "American Staffordshire Terrier",
//         "status": "field",
//         "imageUrl": "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Crumpet-PBXVI.jpg",
//         "createdAt": "2022-12-02T16:47:15.726Z",
//         "updatedAt": "2022-12-02T16:47:15.726Z",
//         "teamId": 550,
//         "cohortId": 292
//         },
//         {
//         "id": 9438,
//         "name": "Filbert",
//         "breed": "Shetland Sheepdog / Border Collie",
//         "status": "field",
//         "imageUrl": "http://r.ddmcdn.com/w_942/s_f/o_1/cx_35/cy_0/cw_942/ch_1413/APL/uploads/2019/12/Filbert-PBXVI.jpg",
//         "createdAt": "2022-12-02T16:47:15.726Z",
//         "updatedAt": "2022-12-02T16:47:15.726Z",
//         "teamId": 550,
//         "cohortId": 292
//         },
//         {
//         "id": 9440,
//         "name": "Huck",
//         "breed": "Miniature Poodle / Shih Tzu",
//         "status": "bench",
//         "imageUrl": "http://r.ddmcdn.com/w_962/s_f/o_1/cx_25/cy_0/cw_962/ch_1443/APL/uploads/2019/12/Huck-PBXVI.jpg",
//         "createdAt": "2022-12-02T16:47:15.726Z",
//         "updatedAt": "2022-12-02T16:47:15.726Z",
//         "teamId": 550,
//         "cohortId": 292
//         },
//         {
//         "id": 9442,
//         "name": "Kenny",
//         "breed": "Golden Retriever / Boxer",
//         "status": "bench",
//         "imageUrl": "http://r.ddmcdn.com/w_1012/s_f/o_1/cx_0/cy_0/cw_1012/ch_1518/APL/uploads/2019/12/Kenny-PBXVI.jpg",
//         "createdAt": "2022-12-02T16:47:15.726Z",
//         "updatedAt": "2022-12-02T16:47:15.726Z",
//         "teamId": 550,
//         "cohortId": 292
//         }
//     // put dummy objects here.
// ];

// console.log(puppies[0]);

const Main = () => {
    // console.log(useState([]));
    //   useState is currently taking the array '[]' and passing it to 'players'
    // I think 'useState' could be rewritten as: const useState = ([]) => {setPlayers(players);}; 
    const [players, setPlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayer] = useState({});


    useEffect(() => {
        getPlayers(setPlayers);
    },[])
    // the square brackets tells useEffect to run the function within but only run it one time.
    // to get data into 'players' from the api component file, we have to pass the setPlayers function to 'getPlayers'
    // setPlayers will come back with data from the API call and 'players' gets linked with this data. 

    // console.log(players);
    console.log('selected players data ', selectedPlayers);
    //not getting any data pulled form the API for some reason 
  
  
    return (
    <div>
      <NavBar />
      <AllPuppies allPuppies={players} getSinglePlayer={getSinglePlayer} setSelectedPlayer={setSelectedPlayer}/>
      <SinglePuppy selectedPlayers={selectedPlayers}/>
      {/* <AllPuppies puppy={puppies[0]} />
      <SinglePuppy pup={puppies[0]} /> */}
    </div>
  );
};

export default Main;

/* puppies from above gets inserted and variable allPuppies gets assigned to it which then gets pushed to AllPuppies as 'props'
    same thing happens to SinglePuppy. 'pup' gets assigned to 'puppies' and pup gets called as 'props' in the SinglePuppy module.


*/