import React from "react";
import Intercom from "../../container/Intercom/Intercom";

const Layout: React.FC = () => {
  return (
    <div className={"min-vh-100 bg-black d-flex flex-column justify-content-center align-items-center"}>
      <Intercom/>
    </div>
  );
};

export default Layout;