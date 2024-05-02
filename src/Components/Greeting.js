import React, { useState, useEffect } from 'react';
import song from './bruno.mp3';

function Greeting() {
  const [sheinClicked, setSheinClicked] = useState(false);
  const [buyMeClicked, setBuyMeClicked] = useState(false);
  const [cultBeautyClicked, setCultBeautyClicked] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [showQuestion2, setShowQuestion2] = useState(false); // New state for second question
  const [showQuestion3, setShowQuestion3] = useState(false); // New state for third question
  const [answer1, setAnswer1] = useState(''); // Separate state for question 1
  const [answer2, setAnswer2] = useState(''); // Separate state for question 2
  const [answer3, setAnswer3] = useState(''); // Separate state for question 3
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false); // State for showing birthday message
  const [showWrongAnswer, setShowWrongAnswer] = useState(false);

  useEffect(() => {
    let timeout;
    if (showWelcome) {
      timeout = setTimeout(() => {
        setShowWelcome(false);
      }, 7000); // 7 seconds
    }
    return () => clearTimeout(timeout);
  }, [showWelcome]);

  useEffect(() => {
    let timeout;
    if (showWrongAnswer) {
      timeout = setTimeout(() => {
        setShowWrongAnswer(false);
      }, 3000); // Disappear after 2 seconds
    }
    return () => clearTimeout(timeout);
  }, [showWrongAnswer]);

  const handleTicketClick = (ticket) => {
    if (ticket === 'shein' && !sheinClicked) {
      setShowQuestion(prevState => !prevState); // Toggle the showQuestion state
    } else if (ticket === 'buyMe' && !buyMeClicked) {
      setShowQuestion2(prevState => !prevState); // Toggle the showQuestion state
    } else if (ticket === 'cultBeauty' && !cultBeautyClicked) {
      setShowQuestion3(prevState => !prevState); // Toggle the showQuestion state
    }
  };
  

const handleAnswerSubmit = (ticket) => {
  if ( ticket === 'shein' && parseInt(answer1) === 2) {
    setSheinClicked(true);
    setCorrectAnswer(true);
    setShowQuestion(false); // Hide the question and input box
    setShowWelcome(true); // Show the birthday message
  } else if ( ticket === 'buyMe' && parseInt(answer2) === 4) {
    setBuyMeClicked(true);
    setCorrectAnswer(true);
    setShowQuestion2(false); // Hide the question and input box
    setShowWelcome(true); // Show the birthday message
  } else if (ticket === 'cultBeauty' && parseInt(answer3) === 6) {
    setCultBeautyClicked(true);
    setCorrectAnswer(true);
    setShowQuestion3(false); // Hide the question and input box
    setShowWelcome(true); // Show the birthday message
  } else {
    setCorrectAnswer(false);
    setShowWrongAnswer(true)
    setSubmitted(true);
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

          .audio-controls {
            margin-top: 40px; /* Increase spacing between audio controls and icons */
          }

          .birthday-message {
            animation: fadeOut 3s forwards;
          }

          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
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

      <div>
        {showQuestion && (
          <div>
            <p>What is 1+1?</p>
            <input
              type="text"
              value={answer1}
              onChange={(e) => setAnswer1(e.target.value)}
            />
            <button onClick={() => handleAnswerSubmit('shein')}>Submit</button>
          </div>
        )}
        {showQuestion2 && (
          <div>
            <p>What is 2+2?</p> {/* Second question */}
            <input
              type="text"
              value={answer2}
              onChange={(e) => setAnswer2(e.target.value)}
            />
            <button onClick={() => handleAnswerSubmit('buyMe')}>Submit</button>
          </div>
        )}
        {showQuestion3 && (
          <div>
            <p>What is 3+3?</p> {/* Third question */}
            <input
              type="text"
              value={answer3}
              onChange={(e) => setAnswer3(e.target.value)}
            />
            <button onClick={() => handleAnswerSubmit('cultBeauty')}>Submit</button>
          </div>
        )}
        {submitted && !correctAnswer && showWrongAnswer && (
          <p>Sorry, wrong answer. Try again.</p>
        )}
      </div>

      <audio controls autoPlay={true} width="50" height="50" className="audio-controls">
        <source src={song} type="audio/mp3"></source>
      </audio>

      {showWelcome && (
        <p className="birthday-message">
          🎈 ʜᴀᴘᴘʏ ʙɪʀᴛʜᴅᴀʏ︎︎ 🎈 <br /> ˚ ༘ ೀ⋆.˚✨🥂♡ ༘*˚ ༘ ೀ⋆.˚
        </p>
      )}
    </div>
  );
}

export default Greeting;
