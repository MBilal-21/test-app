import React, { useRef } from "react";
import { part } from "./AddCitation";
const WritePaste = () => {
  return (

      <div>
        <div> Formatted citation-------------------------</div>
        <div>
          <label className="labelText" htmlFor="CITATION">CITATION</label>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
      </div>
      
  );
};

const PreviewCite = ()=>{

}


const CitationInputs = () => {
  const org = useRef();
  const showInputHandle = () => {
    const or = org.current.style;
    const inp = document.getElementsByClassName("inp-nam");
    if (or.display === "none") {
      or.display = "block";
      for (let i = 0; i < inp.length; i++) {
        inp[i].style = "display:none";
      }
    } else {
      or.display = "none";
      for (let i = 0; i < inp.length; i++) {
        inp[i].style = "display:flex";
      }
    }
  };

  return (
    <div>
      {/* <form action="" className="cite-form "> */}
      <div>
        <div>
        <div className="d-flex align-items-center ">
            <span>Contributer</span>
            <span className="line"></span>
            <span>></span>
          </div>
          <div className="input-wrappers d-flex p-3 gap-3 justify-content-center align-items-center">
            <div className="textheader text-end label">
              ARTIST
            </div>
            <div className=" d-flex ">
              <input
                type="text"
                placeholder="First Name"
                className="w-50  inp-nam"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-50 inp-nam"
              />
              <input
                type="text"
                placeholder="Company and Organization Name"
                ref={org}
                className="organizationName"
              />
            </div>
            <div className="d-flex gap-3">
              <button onClick={showInputHandle}>org</button>
              <button>del</button>
            </div>
          </div>
          {/* add button */}
          <div>
            <button>Add Author</button>
          </div>
        </div>
        {/* Artwork */}
        <div>
          <div className="d-flex align-items-center ">
            <span>Artwork:</span>
            <span className="line"></span>
            <span>></span>
          </div>

          <div className="input-div2">
            <div className="input-div2-1">
              <div> <label className="labelText  text-end " htmlFor="artTitle">TITLE OF ARTWORK</label></div>
              <input type="text" id="artTitle" />
            </div>
            <div className="input-div2-1">
              <div> <label className="labelText  text-end " htmlFor="date">DATE PUBLISHEDK</label></div>
              <input type="date" name="" id="date" />
            </div>
            <div className="input-div2-1">
              <div> <label className="labelText  text-end " htmlFor="MEDIUM">MEDIUM</label></div>
              <input type="text" id="MEDIUM" />
            </div>
            <div className="input-div2-1">
              <div> <label className="labelText  text-end " htmlFor="artTitle">MUSEUM OR GALLERY</label></div>
              <input type="text" id="artTitle" />
            </div>
            <div className="input-div2-1">
              <div> <label className="labelText  text-end " htmlFor="mgl">MUSEUM OR GALLERY LOCATION</label></div>
              <input type="text" id="mgl" />
            </div>
            {/* --------------switch-- */}
            <div className="switch-div">
              
            <div className="form-switch d-flex ">
            <label className="labelText text-end " htmlFor="flexSwitchCheckChecked">ARTWORK IS ONLINE?</label>
              <input
                className="form-check-input mb-3"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckChecked"
                defaultChecked=""
                onClick={(e) => {
                  console.log(e.target.checked);
                }}
                />
                </div>
                {/* --------------switch to -- */}
                <div className="switch-to">
                <div className="input-div2-1">
              <div> <label className="labelText  text-end " htmlFor="url">URL</label></div>
              <input type="text" id="url" />
            </div>
         
                <div className="input-div2-1">
              <div> <label className="labelText  text-end " htmlFor="date">DATE ACCESSED/VIEWED</label></div>
              <input type="date" id="date" />
            </div>
                </div>
            </div>
          </div>
        </div>
      {/* <WritePaste /> */}
       {/*----------- Annotation ------------*/}
      <div>
       <div className="d-flex align-items-center ">
            <span>Annotation</span>
            <span className="line"></span>
            <span>></span>
          </div>
      <div className="input-div2-1 mt-4">
              <label className="labelText  text-end " htmlFor="annotation">ANNOTATION</label>
              
              <textarea  id="annotation" cols="30" rows="4"></textarea>
            </div>
      </div>
     </div>
      <div className="preview-cite">
        <div className="preview zigzag">
                <span>Preview</span>
                <div>Hello</div>
        </div>
        <button className="bton"><img src="#" alt="#" /> Submit</button>
      </div>
     
    </div>
  );
};

export default CitationInputs;
