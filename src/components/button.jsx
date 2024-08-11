import React from "react";
import '../App.css';

function Button({ count, onClick }) {
  return <button
    onClick={() => onClick()}
    className="btn btn-primary"
  >Clicked {count} times
  !</button>;
}

export default Button;
