import React, { useState, useRef, useEffect, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AppState } from "../App.js"

const part = [
  { link: "artwork", name: "Artwork" ,contributer:["Artist"], addNameButton:[{name:"Add another Artist",add:"Artist"}], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "blog", name: "Blog Post" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Blog post",childInput:[{label:"TITLE OF POST",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"URL",type:"text"},{label:"DATE ACCESSED/VIEWED",type:"date"}]},{name:"Main website",childInput:[{label:"BLOG TITLE",type:"text"}]}], isOnline:false},
  { link: "book", name: "Book" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Book",childInput:[{label:"TITLE OF BOOK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"DATE ORIGINALLY PUBLISHED",type:"date"},{label:"EDITION",type:"text"},{label:"VOLUME NUMBER",type:"text"},{label:"PUBLISHER",type:"text"},{label:"PUBLISHER PLACE",type:"text"},{label:"PAGE RANGE",type:"text"},{label:"ISBN",type:"text"}]}], isOnline:true},
  { link: "chapter", name: "Book Chapter" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Book Chapter",childInput:[{label:"TITLE OF CHAPTER",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "review", name: "Book Review" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Review",childInput:[{label:"TITLE OF REVIEW",type:"text"},{label:"DATE ORIGINAL BOOK PUBLISHED",type:"date"},{label:"PAGE RANGE",type:"text"}]}], isOnline:true},
  { link: "paper", name: "Conference Paper" ,contributer:["Artist"], addNameButton:[{name:"Add another PAPER AUTHOR",add:"PAPER AUTHOR"},{name:"Add Editor",add:"Editor"}], inputSection2:[{name:"Paper/Proceedings",childInput:[{label:"TITLE OF PAPER",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"NAME OF JOURNAL/PROCEEDINGS",type:"text"},{label:"PUBLISHER",type:"text"},{label:"PUBLISHER PLACE",type:"text"},{label:"VOLUME NUMBER",type:"text"},{label:"ISSUE NUMBER",type:"text"},{label:"PAGE RANGE",type:"text"}]},{name:"Conference",childInput:[{label:"NAME OF EVENT",type:"text"},{label:"LOCATION OF EVENT",type:"text"},{label:"DATE OF EVENT",type:"date"}]}], isOnline:true},
  { link: "database", name: "Database Article" ,contributer:["Artist"], addNameButton:[{name:"Add another ARTICLE AUTHOR",add:"ARTICLE AUTHOR"},{name:"Add Editor",add:"Editor"}], inputSection2:[{name:"Database",childInput:[{label:"PUBLICATION TITLE",type:"text"},{label:"VOLUME NUMBER",type:"text"},{label:"ISSUE NUMBER",type:"text"},{label:"DATABASE NAME",type:"text"}]}], isOnline:false},
  { link: "dictionary", name: "Dictionary Entry" ,contributer:["Artist"], addNameButton:[{name:"Add another Entry Author",add:"ENTRY AUTHOR"},{name:"Add Editor",add:"EDITOR"}], inputSection2:[{name:"Entry",childInput:[{label:"TITLE OF ENTRY",type:"text"},{label:"PAGE RANGE",type:"text"}]},{name:"Dictionary", childInput:[{label:"NAME OF DICTIONARY",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"PUBLISHER",type:"text"},{label:"PUBLISHER PLACE",type:"text"}]}], isOnline:true},
  { link: "e-book", name: "E-book" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"E-book",childInput:[{label:"TITLE OF E-BOOK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"PUBLISHER",type:"text"},{label:"PUBLISHER PLACE",type:"text"},{label:"EDITION",type:"text"},{label:"VOLUME NUMBER",type:"text"},{label:"PAGE RANGE",type:"text"},{label:"URL",type:"text"},{label:"DATE ACCESSED/VIEWED",type:"text"}]}], isOnline:false},
  { link: "encyclopedia", name: "Encyclopedia Entry" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "movie", name: "Film/Movie (DVD, etc)" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "image", name: "Image" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "interview", name: "Interview" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "journal-article", name: "Journal Article" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "legal-bill", name: "Legal Bill" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "legal-case", name: "Legal Case" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "Legislation", name: "Legislation" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "magazine-article", name: "Magazine Article" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "map", name: "Map" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "news-article", name: "News Article" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "patent", name: "Patent" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "personal-communication", name: "Personal Communication" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "Regulation", name: "Regulation" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "Report", name: "Report" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "Review", name: "Review" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "Song", name: "Song" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "Speech", name: "Speech" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "Standard", name: "Standard" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "Thesis (or Dissertation)", name: "Thesis (or Dissertation)" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "TV/Radio Broadcast", name: "TV/Radio Broadcast" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "Video", name: "Video" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "Website", name: "Website" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
  { link: "Write/paste citation", name: "📋 Write/paste citation" ,contributer:["Artist"], addNameButton:[""], inputSection2:[{name:"Artwork",childInput:[{label:"TITLE OF ARTWORK",type:"text"},{label:"DATE PUBLISHED",type:"date"},{label:"MEDIUM",type:"text"},{label:"MUSEUM OR GALLERY",type:"text"},{label:"MUSEUM OR GALLERY LOCATION",type:"text"}]}], isOnline:true},
];

const AddCiteHead = () => {
  const navigate = useNavigate();
  return <>
  <div className=" add-citation text-center">
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
              navigate(-1);
            }}
          >
            X
          </button>
        </div>
        <hr />
        <div>
        <Outlet/>
        </div>
        <div className="preview-cite">
        <div className="preview zigzag">
                <span>Preview</span>
                <div>Hello</div>
        </div>
        <button className="bton"><img src="#" alt="#" /> Submit</button>
      </div>
        </div>
        </>;
};

const AddCitation = () => {
  const appData = useContext(AppState);
  // const [disp, setDisp] = useState(false);
  const [Input, setInput] = useState(1);
  const displayMore = useRef();
  // const navigate = useNavigate();
  const btns = [
    { btn: "Website", placeholder: "Enter or paste web url... " },
    { btn: "Book", placeholder: "Serch Book title" },
    { btn: "Journal", placeholder: "Serch journal article" },
    { btn: "Video", placeholder: "serch video" },
    // { btn: "More", placeholder: "more" },
  ];
  useEffect(() => {
    appData.disp
      ? (displayMore.current.style = "display:flex;")
      : (displayMore.current.style = "display:none;");
  }, [appData.disp]);

  const More = () => {
    return (
      <div className="more-part" ref={displayMore}>
        {part.map((item, i) => {
          return (
            <Link to={`${i}/${item.link}`} key={i} className="more">
              <div className="more-text">{item.name}</div>
            </Link>
          );
        })}
      </div>
    );
  };

  return (
    <div>
        <div>
          <div className="div-2">
            <div className="div-2-1">
              {btns.map((item, index) => {
                return (
                  <button
                    className="bton"
                    key={index}
                    onClick={() => {
                      appData.setDisp(false);
                      setInput(index);
                    }}
                  >
                    {item.btn}
                  </button>
                );
              })}
              <button
                className="bton"
                onClick={() => {
                  appData.disp ? appData.setDisp(false) : appData.setDisp(true);
                }}
              >
                More
              </button>
              <More />
            </div>
            <div className="div-2-2">
              <input
                type="text"
                className="dialog-input"
                placeholder={btns[Input].placeholder}
              />
              <button className="bton">Search</button>
            </div>
          </div>
          <hr /> OR <hr />
          <div className="add-manual">Manually Enter Information</div>
          <hr />
          OR
          <hr />
          <div className="drag-drop">Drag and drop a scholarly PDF here!</div>
          {/* <WritePaste/> */}
        </div>
      </div>
    
  );
};

export default AddCitation;
export {AddCiteHead, part}
