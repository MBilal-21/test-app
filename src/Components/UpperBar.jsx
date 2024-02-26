import React from "react";
import arrowForward from "../images/arrow-forward.svg";
import download from "../images/download.svg";
import {NavLink} from "react-router-dom"
import plus from "../images/plus.svg";
const UpperBar = () => {
  // const st =(e)=>{
  //   console.log(e);
  //   return{
  //     background: e.isActive? "pink":"red",
  //     color : e.isActive?"black":'#f1c40f',
  //      borderRadius:"5px",
  //       boxShadow: '0 2px 8px rgba(0,0,0,.35)'
  //   }
  // }
  return (
    <div className="d-flex upperBar">
      <div className="d-flex">
        <button className="btn d-flex"><img src={plus} alt="+" width={15} /> Add Citation</button>
        <input  type="file" id="file"    style={{ display: "none" }}/>
        <label className="file btn" htmlFor="file">
              Import
            </label>
            {/* <NavLink style = {st}>Hello</NavLink> */}
      </div>

      <img src={arrowForward} alt="arrowForward" width={30} />
      <button className="btn">Select Font</button>
      <img src={arrowForward} alt="arrowForward" width={30}/>
      <button className="btn d-flex" style={{background:"rgba(45, 45, 216, 0.669)",color:"white"}}><img src={download} alt="dn" width={15} /> Download Works Cited</button>
    </div>
  );
};

export default UpperBar;
