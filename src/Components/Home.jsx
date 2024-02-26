import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = ({ project }) => {
  const { id } = useParams();
  // console.log("data", project[id].data);
  // const [projectData, setProjectData] = useState(project[id].data);
  // console.log(id);
  return (
    <div className="container text-center">
      {project[id].data != 0 ? (
        <div className="sub-container">
          <div className="sub-upper-part d-flex">
            <div>font style</div>
            <div>AZ Sort</div>
          </div>
          <div className="sub-upper-part-2 d-flex">
            <input type="checkbox" name="select" id="select" />
            <p>Works Cited</p>
          </div>
          {project[id].data.map((item, index) => {
            return (
              <div className="d-flex sub-lower-part" key={index}>
                <input type="checkbox" />
                <div>{item.title}</div>
                <div>
                  <button>edit</button>
                  <button>show more</button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="sub-container-2">
          <h1>No citations</h1>
          <p>There are no citations in this project yet.</p>
          <Link to={`new`}><button className="btn">Add Citation</button></Link>
        </div>
      )}
      <Outlet/>
    </div>
  );
};

export default Home;
