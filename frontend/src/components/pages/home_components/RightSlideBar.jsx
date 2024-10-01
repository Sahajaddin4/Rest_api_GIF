import React from "react";
import ApiOverView from "./ApiOverView";
import Code from './Code';

function RighSlideBar({overView}) {

  return (
    <div className="">
        {overView?<ApiOverView />:<Code />}
    </div>
  );
}

export default RighSlideBar;
