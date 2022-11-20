import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const onClick = () => {
    navigate("/about");
  };

  return (
    <>
      <div>Home</div>
      <button onClick={onClick}>ABOUT</button>
    </>
  );
}

export default Home;
