import React, { useEffect, useState } from "react";
import sun from "../images/sun.svg";
import bibIcon from "../images/bibIcon.svg";
import { Link } from "react-router-dom";

const SideBottomBar = ()=>{
  return(
    <div className="sidebar-bottom">
  {/* msg */}
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="122.88px"
    height="78.607px"
    viewBox="0 0 122.88 78.607"
    enableBackground="new 0 0 122.88 78.607"
    xmlSpace="preserve"
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.058,65.992l24.224-24.221l36.837,36.836H73.673h-25.23H0l36.836-36.836 L61.058,65.992L61.058,65.992z M1.401,0l59.656,59.654L120.714,0H1.401L1.401,0z M0,69.673l31.625-31.628L0,6.42V69.673L0,69.673z M122.88,72.698L88.227,38.045L122.88,3.393V72.698L122.88,72.698z"
      />
    </g>
  </svg>
  {/* lock */}
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="96.108px"
    height="122.88px"
    viewBox="0 0 96.108 122.88"
    enableBackground="new 0 0 96.108 122.88"
    xmlSpace="preserve"
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.892,56.036h8.959v-1.075V37.117c0-10.205,4.177-19.484,10.898-26.207v-0.009 C29.473,4.177,38.754,0,48.966,0C59.17,0,68.449,4.177,75.173,10.901l0.01,0.009c6.721,6.723,10.898,16.002,10.898,26.207v17.844 v1.075h7.136c1.59,0,2.892,1.302,2.892,2.891v61.062c0,1.589-1.302,2.891-2.892,2.891H2.892c-1.59,0-2.892-1.302-2.892-2.891 V58.927C0,57.338,1.302,56.036,2.892,56.036L2.892,56.036z M26.271,56.036h45.387v-1.075V36.911c0-6.24-2.554-11.917-6.662-16.03 l-0.005,0.004c-4.111-4.114-9.787-6.669-16.025-6.669c-6.241,0-11.917,2.554-16.033,6.665c-4.109,4.113-6.662,9.79-6.662,16.03 v18.051V56.036L26.271,56.036z M49.149,89.448l4.581,21.139l-12.557,0.053l3.685-21.423c-3.431-1.1-5.918-4.315-5.918-8.111 c0-4.701,3.81-8.511,8.513-8.511c4.698,0,8.511,3.81,8.511,8.511C55.964,85.226,53.036,88.663,49.149,89.448L49.149,89.448z"
      />
    </g>
  </svg>
  {/* protect */}
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    width="105.802px"
    height="122.88px"
    viewBox="0 0 105.802 122.88"
    enableBackground="new 0 0 105.802 122.88"
    xmlSpace="preserve"
  >
    <g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M105.689,0H0.112v60.381c-1.824,26.659,18.714,50.316,52.789,62.499 c34.074-12.183,54.613-35.84,52.789-62.499V0L105.689,0z M52.869,8.61H9.417v48.832c-0.022,0.313-0.039,0.625-0.053,0.938h43.504 v49.557l0.142,0.052c27.313-9.715,43.927-28.454,42.962-49.646H52.869V8.61L52.869,8.61z"
      />
    </g>
  </svg>
  {/* home */}
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 122.88 112.07"
    style={{ enableBackground: "new 0 0 122.88 112.07" }}
    xmlSpace="preserve"
  >
    <style
      type="text/css"
      dangerouslySetInnerHTML={{
        __html: ".st0{fill-rule:evenodd;clip-rule:evenodd;}"
      }}
    />
    <g>
      <path
        className="st0"
        d="M61.44,0L0,60.18l14.99,7.87L61.04,19.7l46.85,48.36l14.99-7.87L61.44,0L61.44,0z M18.26,69.63L18.26,69.63 L61.5,26.38l43.11,43.25h0v0v42.43H73.12V82.09H49.49v29.97H18.26V69.63L18.26,69.63L18.26,69.63z"
      />
    </g>
  </svg>
</div>

  )
}
const SideBar = () => {
  return (
    <div className="sidebar">
        <div className="d-flex head">
      <Link to={"/"} className="text-style">
          <img src={bibIcon} alt="MyBib" width={35} className="logo" />
          <h1 style={{marginLeft:"35px"}}>MyBib</h1>
      </Link>
          <img src={sun} alt="switch" width={20} height={20} />
        </div>

     
    </div>
  );
};

export default SideBar;
export {SideBottomBar};
