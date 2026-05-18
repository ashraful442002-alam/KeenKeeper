import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="text-center py-20">

      <h1 className="text-6xl font-bold">
        404
      </h1>

      <p className="mt-4 text-xl">
        Page Not Found
      </p>

      <Link to="/">
        <button className="btn mt-6">
          Go Home
        </button>
      </Link>

    </div>
  );
};

export default ErrorPage;