import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = props => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <div>
      <Backdrop show={props.open} clicked={props.closed} />

      <div className={attachedClasses.join(" ")}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </div>
  );
};

export default sideDrawer;
