import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrap = (
  Component: any,
  idName?: string | undefined,
  classNames?: string
) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Component />
        </div>
        {/* <div className="copyright">
            <p className="p-text">@2022 Davi</p>
            <p className="p-text">All rights reserved</p>
          </div> */}
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
