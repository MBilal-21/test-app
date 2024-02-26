import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const part = [
 {link: "artwork",name: "Artwork",},
 {link: "blog",name: "Blog Post",},
 {link: "book",name: "Book",},
 {link: "chapter",name: "Book Chapter",},
 {link: "review",name: "Book Review",},
 {link: "",name: "Conference Paper",},
 {link: "",name: "Database Article",},
 {link: "",name: "Dictionary Entry",},
 {link: "",name: "E-book",},
 {link: "",name: "Encyclopedia Entry",},
 {link: "",name: "Film/Movie (DVD, etc)",},
 {link: "",name: "Image",},
 {link: "",name: "Interview",},
 {link: "",name: "Journal Article",},
 {link: "",name: "Legal Bill",},
 {link: "",name: "Legal Case",},
 {link: "",name: "Legislation",},
 {link: "",name: "Magazine Article",},
 {link: "",name: "Map",},
 {link: "",name: "News Article",},
 {link: "",name: "Patent",},
 {link: "",name: "Personal Communication",},
 {link: "",name: "Regulation",},
 {link: "",name: "Report",},
 {link: "",name: "Review",},
 {link: "",name: "Song",},
 {link: "",name: "Speech",},
 {link: "",name: "Standard",},
 {link: "",name: "Thesis (or Dissertation)",},
 {link: "",name: "TV/Radio Broadcast",},
 {link: "",name: "Video",},
 {link: "",name: "Website",},
 {link: "",name: "📋 Write/paste citation",},
];



const AddCitation = () => {
  const [disp, setDisp] = useState(false);
  const [Input, setInput] = useState(1);
  const displayMore = useRef();
  const navigate = useNavigate();
  const btns = [
    { btn: "Website", placeholder: "Enter or paste web url... " },
    { btn: "Book", placeholder: "Serch Book title" },
    { btn: "Journal", placeholder: "Serch journal article" },
    { btn: "Video", placeholder: "serch video" },
    // { btn: "More", placeholder: "more" },
  ];
  useEffect(() => {
    disp
      ? (displayMore.current.style = "display:flex;")
      : (displayMore.current.style = "display:none;");
  }, [disp]);

  const More = () => {
    return (
      <div className="more-part" ref={displayMore}>
        {part.map((item, i) => {
          return (
            <Link key={i} className="more">
              <div className="more-text">{item.name}</div>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    // <dialog open={Open} className="dialog add-citation text-center ">
    <div className="dialog add-citation text-center ">
      <div className="div-1 d-flex">
        <button
          className="dialog-btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          #
        </button>
        <h1>New Citation</h1>
        <button
          className="dialog-btn"
          onClick={() => {
            // setOpen(false);
            navigate(-1);
          }}
        >
          X
        </button>
      </div>
      <hr />
      <div className="div-2">
        <div className="div-2-1">
          {btns.map((item, index) => {
            // item.btn == "More" ? displayMore.current.style = "display:flex;" :displayMore.current.style = "display:none;";
            return (
              <button
                className="btn"
                key={index}
                onClick={() => {
                  // item.btn == "More" ? setDisp(true):
                  setDisp(false);
                  setInput(index);
                }}
              >
                {item.btn}
              </button>
            );
          })}
          <button
            className="btn"
            onClick={() => {
              disp ? setDisp(false) : setDisp(true);
            }}
          >
            More
          </button>
        </div>
        <div className="div-2-2">
          <input
            type="text"
            className="dialog-input"
            placeholder={btns[Input].placeholder}
          />
          <button className="btn">Search</button>
        </div>
        <hr /> OR <hr />
        <div className="add-manual">Manually Enter Information</div>
        <hr />
        OR
        <hr />
        <div className="drag-drop">Drag and drop a scholarly PDF here!</div>
      </div>
      <More />
      {/* <WritePaste/> */}
    </div>

    //  </dialog>
  );
};

export default AddCitation;
