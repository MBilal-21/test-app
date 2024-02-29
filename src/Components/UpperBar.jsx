import React, { useEffect, useRef, useState } from "react";
import arrowForward from "../images/arrow-forward.svg";
import download from "../images/download.svg";
import {Link, NavLink} from "react-router-dom"
import plus from "../images/plus.svg";
import Importpart from "./Importpart";
const UpperBar = () => {
 const  [showImportPart, setShowImportPart] = useState(false);

  return (
    <div className="d-flex upperBar" style={{position: 'sticky', top:'0'}}>
      <div className="d-flex">
       <Link to={"new"} className="link"> <button className="bton d-flex"><img src={plus} alt="+" width={15} /> Add Citation</button></Link>
        <button className="file bton" onClick={()=>{showImportPart ? setShowImportPart(false):setShowImportPart(true)}} >
              Import
            </button>
          <Importpart showImportPart={showImportPart} setShowImportPart={setShowImportPart}/>
      </div>

      <img src={arrowForward} alt="arrowForward" width={30} />
      <button className="bton">Select Font</button>
      <img src={arrowForward} alt="arrowForward" width={30}/>
      <button className="bton d-flex" style={{background:"rgba(45, 45, 216, 0.669)",color:"white"}}><img src={download} alt="dn" width={15} /> Download Works Cited</button>
    </div>
  );
};

export default UpperBar;
