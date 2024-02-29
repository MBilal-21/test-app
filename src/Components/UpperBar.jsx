import React, { useEffect, useRef, useState } from "react";
import arrowForward from "../images/arrow-forward.svg";
import download from "../images/download.svg";
import {Link, NavLink} from "react-router-dom"
import plus from "../images/plus.svg";
import Importpart from "./Importpart";
import uploadRIS from '../images/upload-ris.svg'
import spellcheck from "../images/spellcheck.png"
const UpperBar = () => {
 const  [showImportPart, setShowImportPart] = useState(false);

  return (
    <div className="d-flex upperBar" style={{position: 'sticky', top:'0'}}>
      <div className="d-flex">
       <Link to={"new"} className="link"> <button className="bton d-flex"><img src={plus} alt="+" width={15} /> Add Citation</button></Link>
        <button className="file bton" onClick={()=>{showImportPart ? setShowImportPart(false):setShowImportPart(true)}} >
           <img src={uploadRIS} alt="" width={20}/>   Import
            </button>
          <Importpart showImportPart={showImportPart} setShowImportPart={setShowImportPart}/>
      </div>

      <img src={arrowForward} alt="arrowForward" width={40} />
      <button className="bton stylebtn"><img src={spellcheck} alt="" width={20}/> Select Font</button>
      <img src={arrowForward} alt="arrowForward" width={40}/>
      <button className="bton d-flex downloadBton"><img src={download} alt="dn" width={15} /> Download Works Cited</button>
    </div>
  );
};

export default UpperBar;
