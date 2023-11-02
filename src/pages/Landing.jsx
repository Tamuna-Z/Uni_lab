import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function Landing() {
  return (
    <>
    <h1>Get Started Today</h1>
    <Link to="/authorization">
        <button>Get Started</button>
      </Link>
    </>
  )
}

export default Landing