import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div style={{color:"white", padding: '3rem 0 0 2rem'}}>
      <h3>Page not found, Please check the link again</h3>
      <p>
        {" "}
        Go to
        <Link to="/main"> Home </Link>
        page
      </p>
    </div>
  );
}

export default ErrorPage;
