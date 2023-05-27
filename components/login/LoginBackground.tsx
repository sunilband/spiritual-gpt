import React from "react";


type Props = {};

const Background = (props: Props) => {
  return (
    <div className="z-0 absolute bottom-0">
      {/*Hey! This is the original version
    of Simple CSS Waves*/}
      <div className="header ">
        {/*Content before waves*/}
        <div className="inner-header flex">
       {/* <LoginForm/> */}
        </div>
        {/*Waves Container*/}
        <div className="absolute bottom-0 w-screen ">
          <svg
            className="waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={0}
                fill="rgba(255,255,255,0.7"
                className="fill-[#a955f731] "
               
              />
              <use xlinkHref="#gentle-wave" x={48} y={3} fill="rgba(255,255,255,0.5)" />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={5}
                fill="rgba(255,255,255,0.3)"
              />
              <use
                xlinkHref="#gentle-wave"
                x={48}
                y={7}
                fill="#fff"
                
              />
            </g>
          </svg>
        </div>
        {/*Waves end*/}
      </div>
    </div>
  );
};

export default Background;
