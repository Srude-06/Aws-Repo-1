
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Page1 from './Page1'; 
import './App.css';

function App() {
  return (
    <Router> {/* Wrap everything inside Router */}
      <div className="App">
        <header className="App-header">
          <p>
            Changes made in the React app
          </p>
          <a href="https://reactjs.org">
            Welcome to React-Aws  
          </a>
          <nav>
            <Link to="/page1">Go to Page 1</Link> {/* Ensure the path matches the route */}
          </nav>

          <Routes>
            <Route path="/page1" element={<Page1 />} /> {/* Use lowercase 'page1' in the path */}
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;














