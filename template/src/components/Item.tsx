import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function Item() {
  const param = useParams();

  useEffect(() => {
    console.log(param["id"]);
  }, []);

  return (
    <>
      <div>Item</div>
      <div>{param["id"]}</div>
    </>
  );
}

export default Item;
