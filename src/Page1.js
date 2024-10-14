import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom


const Page1 = () => {
  return (
    <div>
      <h1>Welcome to Page 1</h1>
      <p>This is a simple page with basic content.</p>
      <Link to="/"> 
        Go Back to Home
      </Link>
    </div>
  );
};

export default Page1;
