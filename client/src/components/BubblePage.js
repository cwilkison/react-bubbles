import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
 
  useEffect(() => {
    axiosWithAuth()
      .get("/api/colors")
      .then(res => {
        setColorList(res.data);
      })
      .catch(err => 
        console.log( err, "Error retrieving colors" )
        );
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
