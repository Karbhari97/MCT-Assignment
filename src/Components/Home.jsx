import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid" id="Home-Background"
    >
      <h1 className="h1" id="amz" >A&nbsp;M&nbsp;A&nbsp;Z&nbsp;I&nbsp;N&nbsp;G&nbsp; R&nbsp;E&nbsp;C&nbsp;I&nbsp;P&nbsp;E&nbsp;S</h1>

      <Link to="/Recipes"><button className="btn btn-primary">SEARCH RECIPES</button></Link>
      
      
      
    </div>
  );
}

export default Home;
