import React from "react";
import NavigationItems from "../NavigationItems//NavigationItems";
import "./Toolbar.scss";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => (
  <div className="Toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />

    <div className="DesktopOnly">
      <NavigationItems />
    </div>
  </div>
);

export default toolbar;
