import React from "react";
import { Link } from "react-router-dom";
export default function Error405 (){
  return (
    <div className="App">
     <header className="App-header">
      <h3>Error Page</h3>
      <Link to="/" className="btn">
        Back Home
      </Link>
      </header>
    </div>
  );
};

