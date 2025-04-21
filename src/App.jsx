import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Index from "./pages/Index";


function App() {
  return (

      <Router>
        <Routes>
          <Route path="/home" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>

  );
}
export default App;
