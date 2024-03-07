import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reviews from "./Components/Reviews"
import Review from './Components/Review';
function App() {
  return (
    <Router>
      <div className="App-body">
        <Routes>
          <Route path="/" element={<Reviews />} />
          <Route path="/:id" element={<Review />} />
          <Route path="/new" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
