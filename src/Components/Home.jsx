import React, { useEffect, useRef, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import threeDot from "../images/threedots_icon.png"
import rename from "../images/rename.png"
import webLang from "../images/webLang.svg"

const Home = ({ project }) => {
  const { id } = useParams();
  const [isChecked, setIsChecked] = useState(false);
  useEffect(()=>{
      if (isChecked) {
        // onCheck.current.style = " background: linear-gradient(to right, white, blue)"
      }
  },[isChecked])

  return (
    <div className="cite-container-div">
     
        <div className="cite-container text-center">
          <div className="sub-upper-part d-flex">
            <div>font style</div>
            <div>AZ Sort</div>
          </div>
          <div className="sub-upper-part-2 d-flex">
            <input type="checkbox" name="select" id="select" />
            <p>Works Cited</p>
          </div>
          {project[id].data != 0 ? project[id].data.map((item, index) => {
            return (
              <div className="d-flex sub-lower-part" key={index}>
                <div className="d-flex p-1">

                <input type="checkbox"  onClick={(e)=>{
                  const onCheck = e.currentTarget.parentElement.parentElement;
                  e.currentTarget.checked? onCheck.style = " background: linear-gradient(to right, white, #4587F4) ":onCheck.style ="background: white";
                }}/>
                <div className="px-3">{item.title}</div>
                </div>
                <div className="HomeCiteButton">
                  {item.srcId == "32" ?<button><img src={webLang} alt="go" width={20}/></button>:<></>}
                  <button><img src={rename} alt="edit" width={20} /></button>
                  <button><img src={threeDot} alt=":" width={20} /></button>
                </div>
              </div>
            );
          }):<div className="sub-container-2">
          <h1>No citations</h1>
          <p>There are no citations in this project yet.</p>
          <Link to={`new`}><button className="bton">Add Citation</button></Link>
        </div>
          }
        </div>
       
        
   
      <Outlet/>
    </div>
  );
};

export default Home;
