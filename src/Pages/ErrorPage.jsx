import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h3>Page not found, Please check the link again</h3>
      <p>
        {" "}
        Go to
        <Link to="/"> Home </Link>
        page
      </p>
    </div>
  );
}

export default ErrorPage;
