import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import SideBar , {SideBottomBar} from "./Components/SideBar";
import Projects from "./Components/Projects";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import UpperBar from "./Components/UpperBar";
import Importpart from "./Components/Importpart";
import AddCitation from "./Components/AddCitation";
function App() {
  // const [states, setStates] = useState(0);
  const [clorCount, setClorCount] = useState(0);
  const [Open, setOpen] = useState(true);
  const [project, setproject] = useState([
    { name: "John Doe", counter: 0, BorderColor: "#ffff00", data: [] },
    {
      name: "John Doe 2",
      counter: 0,
      BorderColor: "#008000",
      data: [
        { title: "name 2.1" },
        { title: "name 2.2" },
        { title: "name 2.3" },
        { title: "name 2.4" },
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
    });
    setproject(newproject);
    // setStates(states + 1);
    setClorCount(clorCount + 1);
    clorCount >= pBColor.length - 1 ? setClorCount(0) : <></>;
  };

  // useEffect(() => {
  //   console.log(project);
  // }, [states]);

  const Layout = () => {
    return (
      <div className="App d-flex">
        <div className="sideBar">
          <SideBar addFunc={addFunc} />
          {project.map((e, index) => {
            return <Projects e={e} key={index} i={index} />;
          })}
          <SideBottomBar/>
        </div>
        <div style={{ marginLeft: "50px" }}>
          {/* <UpperBar Open={Open} Close={setOpen} /> */}
          <Outlet />
          {/* <AddCitation/> */}
          {/* <Importpart /> */}
        </div>
      </div>
    );
  };
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="project/:id/citations" element={<><UpperBar Open={Open} Close={setOpen} /><Home project={project} /></>} >
          <Route path="new" element={<AddCitation/>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
