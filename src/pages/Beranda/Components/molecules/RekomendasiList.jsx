// import { useEffect, useState } from "react";
// import { BangunJowo, Ceremony, FBudaya, amikom } from "../../../../assets/main"
// import CardComponent from "../../../../components/molecules/Card"



// function RekomendasiList() {
//   fetch('http://localhost:4000/events')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error(error));
//   return (
//     <div className="card-container">
//        <CardComponent image={amikom} title="AMIKOM FEST 2023 BE YOUNG FOREVER" price='50.000'/>
//       <CardComponent image={Ceremony} title="CLOSING CEREMONY - CONTINUE THE CHAPTER TO BECOME STONGER" price='50.000'/>
//       <CardComponent image={FBudaya} title="FESTIVAL BUDAYA LERENG MERAPI PAKEM SLEMAN" price='50.000'/>
//       <CardComponent image={BangunJowo} title="BANGUNJUWO FESTIFAL #2 SEKAR MATARAM" price='50.000'/>
//     </div>
//   )
// }

// export default RekomendasiList


import  { useEffect, useState } from 'react';
import CardComponent from "../../../../components/molecules/Card"
import axios from 'axios';

function RekomendasiList() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/events/6')
      .then((res) => {
        const sortedData = res.data.data.sort((a, b) => b.eventID - a.eventID);
        setEvents(sortedData.slice(0, 4));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  
  

return (
  <>
    <div className="card-container">
      {events.map((event) => (
        <CardComponent
          key={event.eventID}
          title={event.name}
          price={event.price}
        />
      ))}
    </div>
  </>
);

}

export default RekomendasiList;


// import { useEffect, useState } from 'react';
// import CardComponent from "../../../../components/molecules/Card"

// function RekomendasiList() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:4000/events')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Raw response from server:', data);
  
//         // Check if data is an object and convert it to an array
//         const eventsArray = Array.isArray(data) ? data : [data];
  
//         console.log('Transformed data:', eventsArray);
//         setEvents(eventsArray);
//       })
//       .catch(error => console.error('Error fetching events:', error.message));
//   }, []);
  
  

//   return (
//     <div className="card-container">
//       {events.map((event) =>(
//          <CardComponent
//          key={event.eventID}
//          image={event.image || "default-image.jpg"}
//          title={event.name}
//          price={event.price || "Default Price"}
//        />
//       ))}
       
     
//     </div>



//   );
// }

// export default RekomendasiList;



