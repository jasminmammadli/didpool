import React from "react";
import Routing from "../../Routing/Routing";
import { useLocation } from "react-router-dom";

function Main() {
  let location=useLocation()
  console.log(location);
  return (
    <>
      <Routing />
    </>
  );
}

export default Main;
