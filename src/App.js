// import logo from './logo.svg';
import './App.css';
import { HeaderDev, Main, Footer } from "./components";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    
       
       <Router>
        <header>
          <HeaderDev/>
        </header>
        <main>
          <Main/>
        </main>
        <footer>
          <Footer/>
        </footer>
      </Router>
   
    
  );
}

export default App;
