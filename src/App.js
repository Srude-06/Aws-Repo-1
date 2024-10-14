// // import logo from './logo.svg';
// // import './App.css';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import Page1 from './Page1'; 
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>
//           changes made in react app
//         </p>
//         <a
//           href="https://reactjs.org"
//         >
//           Welcome to React-Aws  
//         </a>
//         <nav>
//             <Link to="/Page1">Go to Page 1</Link>
//           </nav>

//         <Routes>
//           <Route path="/Page1" element={<Page1 />} /> {/* Route for Page1 */}
//         </Routes>
//       </header>
//     </div>
//   );
// }

// export default App;


// import './App.css'; // Uncomment if you have a CSS file to import
import { Route, Link, Routes } from 'react-router-dom';
import Page1 from './Page1'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Changes made in the React app.This is my app/home page 
        </p>
        <nav>
          <Link to="/page1">Go to Page 1</Link> 
        </nav>
      </header>

      
      <Routes>
        <Route path="/page1" element={<Page1 />} /> 
      </Routes>
    </div>
  );
}

export default App;
