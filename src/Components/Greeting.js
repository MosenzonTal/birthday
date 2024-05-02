import React, { useState } from 'react';
import song from './bruno.mp3';

function Greeting() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [sheinClicked, setSheinClicked] = useState(false);
  const [buyMeClicked, setBuyMeClicked] = useState(false);
  const [cultBeautyClicked, setCultBeautyClicked] = useState(false);

  const handleTicketClick = (ticket) => {
    setShowWelcome(true);
    switch (ticket) {
      case 'shein':
        setSheinClicked(!sheinClicked);
        break;
      case 'buyMe':
        setBuyMeClicked(!buyMeClicked);
        break;
      case 'cultBeauty':
        setCultBeautyClicked(!cultBeautyClicked);
        break;
      default:
        break;
    }
  };

  return (
    <div style={{ position: "relative", zIndex: 2 }}>
      <style>
        {`
          .ticketContainer {
            display: flex;
            justify-content: center;
          }
          
          .ticket {
            margin-right: 20px;
            text-align: center;
            cursor: pointer;
          }
          
          .ticketImage {
            width: 100px; /* Adjust as needed */
            height: auto; /* Maintain aspect ratio */
            transition: transform 0.5s ease-in-out;
          }

          .ticketImage:hover {
            transform: scale(1.1); /* Increase size on hover */
          }
        `}
      </style>
      <h3>｡ ﾟ ꒰ঌ ✦໒꒱ ༘*.ﾟ ℐ𝓁ℴ𝓋ℯ 𝓎ℴ𝓊 ♡ ⋆˙⟡♡ ⋆˙⟡♡</h3>
      <div className="ticketContainer">
        <div className="ticket" onClick={() => handleTicketClick('shein')}>
          <img
            src={sheinClicked ? 'https://i.pinimg.com/1200x/10/a0/4a/10a04a48aa29fba6aa3186541a524d1b.jpg' : 'https://cdn-icons-png.flaticon.com/512/6662/6662916.png'}
            alt="Shein Ticket"
            className="ticketImage"
          />
        </div>
        <div className="ticket" onClick={() => handleTicketClick('buyMe')}>
          <img
            src={buyMeClicked ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseCmW_juBkY0LcAjxD8CGMafWWjDHShaascKL12NaFQ&s' : 'https://cdn-icons-png.flaticon.com/512/6662/6662916.png'}
            alt="BuyMe Ticket"
            className="ticketImage"
          />
        </div>
        <div className="ticket" onClick={() => handleTicketClick('cultBeauty')}>
          <img
            src={cultBeautyClicked ? 'https://www.cultbeauty.co.uk/c-images/fb-image.png' : 'https://cdn-icons-png.flaticon.com/512/6662/6662916.png'}
            alt="CultBeauty Ticket"
            className="ticketImage"
          />
        </div>
      </div>
      {showWelcome && <p>🎈 ʜᴀᴘᴘʏ ʙɪʀᴛʜᴅᴀʏ︎︎ 🎈 </p>}

      <audio controls autoPlay={true} width="50" height="50">
        <source src={song} type="audio/mp3"></source>
      </audio>
    </div>
  );
}

export default Greeting;
