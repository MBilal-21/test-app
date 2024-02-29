import { createContext, useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import SideBar, { SideBottomBar } from "./Components/SideBar";
import Projects from "./Components/Projects";
import { Routes, Route, Outlet, NavLink, Link } from "react-router-dom";
import UpperBar from "./Components/UpperBar";
// import Importpart from "./Components/Importpart";
import AddCitation, { AddCiteHead } from "./Components/AddCitation";
import AddCite5 from "./Components/AddCite5";
import userAccount from "./images/user-account.png";
import notify from "./images/notify.png";
import help from "./images/help.png";
import chrom from "./images/chrom.png";
import lang from "./images/en-US.svg";
import noteAdd from "./images/note-stack-add.svg";
const AppState = createContext();

function App() {
  const [disp, setDisp] = useState(false);
  const [clorCount, setClorCount] = useState(0);
  const [project, setproject] = useState([
    {
      name: "John Doe",
      counter: 0,
      BorderColor: "#ffff00",
      data: [],
    },
    {
      name: "John Doe 2",
      counter: 0,
      BorderColor: "#008000",
      data: [
        { title: "name 2.1", srcId: null },
        { title: "name 2.2", srcId: 32 },
        { title: "name 2.3", srcId: null },
        { title: "name 2.4", srcId: null },
      ],
    },
  ]);
  const pBColor = [
    "#ff0000",
    "#0000ff",
    "#ffa500",
    "#00ffff",
    "#ffff00",
    "#008000",
  ];

  const addFunc = () => {
    const cl = pBColor[clorCount];
    const newproject = project;
    newproject.push({
      name: `New Project ${project.length + 1}`,
      BorderColor: cl,
      counter: 0,
      data: [{ title: `Task ${project.length + 1}` }],
      srcId: "",
    });
    setproject(newproject);
    setClorCount(clorCount + 1);

    clorCount >= pBColor.length - 1 ? setClorCount(0) : <></>;
  };

  const Layout = () => {
    return (
      <div className="App d-flex">
        <div
          className="sideBar"
          style={{ position: "sticky", top: 0, height: window.screen.height }}
        >
          <SideBar />
          <div
            style={{ height: "70vh", overflowY: "scroll" }}
            className="SideInnerBar"
          >
            {/* ---- */}
            <button onClick={addFunc} className="p-btn d-flex">
              <img
                src={noteAdd}
                alt="+"
                width={25}
                style={{ margin: "0px 6px" }}
              />{" "}
              Start new project
            </button>
            {/* --- */}
            {project.map((e, index) => {
              return <Projects e={e} key={index} i={index} colors={pBColor} />;
            })}

            <div className="delete-and-archive">
              <div>
                {" "}
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M9 12C9 11.5341 9 11.3011 9.07612 11.1173C9.17761 10.8723 9.37229 10.6776 9.61732 10.5761C9.80109 10.5 10.0341 10.5 10.5 10.5H13.5C13.9659 10.5 14.1989 10.5 14.3827 10.5761C14.6277 10.6776 14.8224 10.8723 14.9239 11.1173C15 11.3011 15 11.5341 15 12C15 12.4659 15 12.6989 14.9239 12.8827C14.8224 13.1277 14.6277 13.3224 14.3827 13.4239C14.1989 13.5 13.9659 13.5 13.5 13.5H10.5C10.0341 13.5 9.80109 13.5 9.61732 13.4239C9.37229 13.3224 9.17761 13.1277 9.07612 12.8827C9 12.6989 9 12.4659 9 12Z"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                    />
                    <path
                      opacity="0.5"
                      d="M20.5 7V13C20.5 16.7712 20.5 18.6569 19.3284 19.8284C18.1569 21 16.2712 21 12.5 21H11.5C7.72876 21 5.84315 21 4.67157 19.8284C3.5 18.6569 3.5 16.7712 3.5 13V7"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M2 5C2 4.05719 2 3.58579 2.29289 3.29289C2.58579 3 3.05719 3 4 3H20C20.9428 3 21.4142 3 21.7071 3.29289C22 3.58579 22 4.05719 22 5C22 5.94281 22 6.41421 21.7071 6.70711C21.4142 7 20.9428 7 20 7H4C3.05719 7 2.58579 7 2.29289 6.70711C2 6.41421 2 5.94281 2 5Z"
                      stroke="#1C274C"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
              </div>
              <div>
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M18 6V16.2C18 17.8802 18 18.7202 17.673 19.362C17.3854 19.9265 16.9265 20.3854 16.362 20.673C15.7202 21 14.8802 21 13.2 21H10.8C9.11984 21 8.27976 21 7.63803 20.673C7.07354 20.3854 6.6146 19.9265 6.32698 19.362C6 18.7202 6 17.8802 6 16.2V6M14 10V17M10 10V17"
                      stroke="#1C274C"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div>
            <SideBottomBar />
          </div>
        </div>

        <div>
          {/* <UpperBar Open={Open} Close={setOpen} /> */}
          <Outlet />
          {/* <AddCitation/> */}
          {/* <Importpart /> */}
        </div>
        <div>
          <div className="vertical-icons-upper-div">
            <div className="vertical-icons">
              <Link className="a">
                <img src={userAccount} alt="User Account" />
              </Link>
              <Link className="a">
                <img src={notify} alt="Notification" />
              </Link>
              <Link className="a">
                <img src={help} alt="Helping Message" />
              </Link>
              <Link className="a">
                <img src={chrom} alt="Chrome Extension" />
              </Link>
            </div>
          </div>
          <div className="vertical-icons lang">
            <img src={lang} alt="lang" width={30} />
          </div>
        </div>
      </div>
    );
  };
  return (
    <AppState.Provider value={{ disp, setDisp }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            path="project/:id/citations"
            element={
              <div className="main-content-citation d-flex">
                <div>
                  <UpperBar />
                  <Home project={project} />
                </div>
              
              </div>
            }
          >
            <Route path="new" element={<AddCiteHead />}>
              <Route index element={<AddCitation />} />
              <Route path=":index/:num" element={<AddCite5 />} />
            </Route>
            <Route
              path="input"
              element={
                <div>
                  <div>
                    <label htmlFor="authorName">Author Name</label>
                    <input type="text" id="authorName" />
                  </div>
                </div>
              }
            />
          </Route>
        </Route>
      </Routes>
    </AppState.Provider>
  );
}

export default App;
export { AppState };
