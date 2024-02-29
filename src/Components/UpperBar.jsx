import React, { useEffect, useRef, useState } from "react";
// import arrowForward from "../images/arrow-forward.svg";
import arrowForward from "../images/forward-arrow.png";

import download from "../images/download.svg";
import {Link, NavLink} from "react-router-dom"
import plus from "../images/plus.svg";
import Importpart from "./Importpart";
import uploadRIS from '../images/upload-ris.svg'
import spellcheck from "../images/spellcheck.png"
import search from "../images/search.png";
import group from "../images/group.png";

const UpperBar = () => {
 const  [showImportPart, setShowImportPart] = useState(false);

  return (
    <div className="d-flex" style={{position: 'sticky', top:'0', zIndex:5}}>
    <div className="d-flex upperBar">
      <div className="d-flex">
       <Link to={"new"} className="link"> <button className="bton d-flex"><img src={plus} alt="+" width={15} /> Add Citation</button></Link>
        <button className="file bton" onClick={()=>{showImportPart ? setShowImportPart(false):setShowImportPart(true)}} >
           <img src={uploadRIS} alt="" width={20}/>   Import
            </button>
          <Importpart showImportPart={showImportPart} setShowImportPart={setShowImportPart}/>
      </div>

      <img src={arrowForward} alt="arrowForward" width={40} className="arrowForword"/>
      <button className="bton stylebtn"><img src={spellcheck} alt="" width={20}/> Select Font</button>
      <img src={arrowForward} alt="arrowForward" width={40} className="arrowForword"/>
      <button className="bton d-flex downloadBton"><img src={download} alt="dn" width={15} /> Download Works Cited</button>
    </div>
    <div className="CiteSideButton" >
                  <button><img src={search} alt="serc" width={20} /></button>
                  <button><img src={group} alt="share" width={20} /></button>
             
                </div>
    </div>
  );
};

export default UpperBar;
