import React from "react";
import { useParams } from "react-router-dom";
import Page1 from "../pages/week1/Page1";
import Page2 from "../pages/week1/Page2";


function Week1() {
  const { id } = useParams();

  const pages = {
    "1": <Page1 />,
    "2": <Page2 />,
 
  };

  return pages[id] || <div>Page not found</div>;
}

export default Week1;
