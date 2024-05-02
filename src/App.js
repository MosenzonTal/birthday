import logo from "./logo.svg";
import "./App.css";
import Login from "./Components/Login";
import Footer from "./Components/Footer";
import { useState } from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      <Footer isAuthenticated={isAuthenticated} />
      <Login onLogin={handleLogin} />
    </div>
  );
}

export default App;
