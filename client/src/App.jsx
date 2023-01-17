import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

const App = () => {

  // <script type = "text/javascript" >  
  //       function preventBack() { window.location.href = "http://localhost:3001" }  
  //       setTimeout("preventBack()", 0);  
  //       window.onunload = function () { null };  
  // </script>

  
  return (
    <div className="min-h-screen">
      
      <Navbar/>
      
    
      
      <Welcome/>
      
      
      <Services/>

      <Transactions/>
      
      <Footer/>
      
    </div>
  );
}

export default App;