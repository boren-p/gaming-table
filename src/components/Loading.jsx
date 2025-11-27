import React from 'react';

const Loading = () => {
    return (
        <div className='fixed top-0 left-0 flex items-center justify-center h-screen w-screen'>
            <div className='fixed h-screen w-screen bg-neutral-900 opacity-50'></div>
            {/* loading state */}
            <div className="loaderViewPort ">
        <div className="loader">
          <div className="side front">
            <div className="dot" />
          </div>
          <div className="side back">
            <div className="dotContainer">
              <div className="dot" />
              <div className="dot" />
              <div className="dot" />
            </div>
          </div>
          <div className="side left">
            <div className="dotContainer">
              <div className="dot" />
              <div className="dot" />
            </div>
          </div>
          <div className="side right">
            <div className="dotContainer">
              <div className="subDotContainer">
                <div className="dot" />
                <div className="dot" />
              </div>
              <div className="subDotContainer">
                <div className="dot" />
                <div className="dot" />
              </div>
            </div>
          </div>
          <div className="side top">
            <div className="dotContainer">
              <div className="subDotContainer">
                <div className="dot" />
                <div className="dot" />
              </div>
              <div className="subDotContainer">
                <div className="dot" />
              </div>
              <div className="subDotContainer">
                <div className="dot" />
                <div className="dot" />
              </div>
            </div>
          </div>
          <div className="side bottom">
            <div className="dotContainer">
              <div className="subDotContainer">
                <div className="dot" />
                <div className="dot" />
              </div>
              <div className="subDotContainer">
                <div className="dot" />
                <div className="dot" />
              </div>
              <div className="subDotContainer">
                <div className="dot" />
                <div className="dot" />
              </div>
            </div>
          </div>
        </div>
            </div>
        </div>
    );
}

export default Loading;
