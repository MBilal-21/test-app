
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import threeDot from "../images/threedots_icon.png"
import rename from "../images/rename.png"
import copy from "../images/copy.png"
import merge from "../images/merge.png"
import archive from "../images/archev.png"
import remove from "../images/icons8-delete-100.png"

const Projects = ({ e, i,colors }) => {
  const linkStyle = (event) => {
    return {
      backgroundColor: event.isActive ? e.BorderColor + "80" : "white",
      borderColor: e.BorderColor,
    };
  };

  const EditprojTitlefun = (e) =>{
    console.log("edited");
    // e.currentTarget.className ="editProjTitle";
    e.currentTarget.style.display = 'none'
    e.currentTarget.nextSibling.style.display = 'block'
  }

  return (
    <>
      <NavLink
        to={`project/${i}/citations`}
        className="text-style  project-card d-flex"
        style={linkStyle}
      >
      
        <div>

        <span>{e.counter}</span>
        <span className="projTitle" onDoubleClick={EditprojTitlefun}>{e.name}</span>
       <input type="text" name="" id="EditprojTitle" style={{display:"none"}} />
        </div>
        {/* <button id="projectBtn">:</button> */}
        <div id="projectBtn-div">
        <img className="threedot" src={threeDot} alt=":" width={30}/>
        <ul>
          <li><img src={rename} alt="ren" width={20} /> Rename</li>
          <li><img src={copy} alt="dup" width={20} /> Duplicate</li>
          <li><img src={merge} alt="mer" width={20} /> Merge</li>
          <li></li>
          <li>
            <div><span style={{width:"20px"}}>O</span>Colors <span>&gt;</span></div>
            <div className="">
              {colors.map(()=>{<div>o</div>})}
            </div>
          </li>
          <li><img src={archive} alt="arc" width={20} /> Archive</li>
          <li><img src={remove} alt="rev" width={20} /> Remove</li>
        </ul>
      </div>
        
      </NavLink>
    </>
  );
};

export default Projects;
