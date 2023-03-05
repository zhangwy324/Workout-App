import React from "react";
import { Link } from "react-router-dom";

export default function navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <a href="https://github.com/zhangwy324/Workout-App">GitHub</a>
      </div>
    </header>
  );
}
