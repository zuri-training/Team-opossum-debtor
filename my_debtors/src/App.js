import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import RegisterAdmin from "./Pages/RegisterAdmin";
import RegisterUser from './Pages/RegisterUser';

function App() {
  return (
    <div className="App">
    <Router>
    <NavBar></NavBar>
    <Routes>
      <Route path="/RegisterUser" exact component={RegisterUser} />
      <Route path="/RegisterAdmin"  component={RegisterAdmin} />
    </Routes>
    </Router>
    <RegisterUser></RegisterUser> 
    {/* <RegisterAdmin></RegisterAdmin>  */}
    </div>
  );
}

export default App;

 /* <img src={logo} className="App-logo" alt="logo" /> */