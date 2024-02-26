// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Projects = ({ e, i}) => {
//   const [states, setstates] = useState(false);
//   const linkStyle = ({isActice}) =>{
//     setstates(isActice);
//     console.log(isActice, states);
//     return{
//       // background: isActice ?  e.BorderColor : 'white',
//       // borderColor:e.BorderColor,
//       // opacity : isActice? 0.5:1,
//      color: isActice? 'red' : 'black',
//     }
//    }
  
//   // console.log(bg);
//   const handleClick = (event) => {
//     console.log(e.BorderColor);
//     console.log(event.currentTarget);
//     event.target.classList.toggle("active");
//     console.log(event.target.classList);
//     event.currentTarget.style.backgroundColor = e.BorderColor;
//   };
//   const test = {
//     backgroundColor:"black"
//   }
//   return (
//     <NavLink
//       to={`project/${i}`}
//       className="text-style"
//       // style={linkStyle}
//       activeStyle={linkStyle}
//       // onClick={handleClick}
//     >
//       <div
//         className="project-card d-flex"
//         style={{ borderColor: e.BorderColor }}
//       >
//         <span>{e.counter}</span>
//         <span className="projTitle">{e.name} </span>
//         {/* <input type="text" value={e.name} onChange={(event)=>setName(event.target.value)}/> */}
//         <button>:</button>
//       </div>
//     </NavLink>
//   );
// };

// export default Projects;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Projects = ({ e, i }) => {
    const linkStyle = (event) => {
       return {
        backgroundColor: event.isActive ? e.BorderColor+"80": "white",
        borderColor: e.BorderColor,
      };
    };

 

  return (
    <>
    <NavLink
      to={`project/${i}/citations`}
      className="text-style  project-card d-flex"
      style={linkStyle}
      >
      {/* <div className="project-card d-flex" style={{ borderColor: e.BorderColor }}> */}
        <span>{e.counter}</span>
        <span className="projTitle">{e.name}</span>
        <button>:</button>
      {/* </div> */}
    </NavLink>
      </>
  );
};

export default Projects;
