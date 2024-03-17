import Signup from "./components/LoginSignup/LoginSignup";
import App from "./App";
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

const Root = () => (
    <Router>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </Router>
  );
  
  export default Root;
  