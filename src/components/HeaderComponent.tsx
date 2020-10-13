import React from "react";

import MenuComponent from "./menu/MenuComponent";
import LogoComponent from "./logo/LogoComponent";

interface IHeaderComponentProps {}

export default class HeaderComponent extends React.Component<
  IHeaderComponentProps
> {
  render() {
    return (
      <div>
        <MenuComponent />

        <LogoComponent />
      </div>
    );
  }
}
