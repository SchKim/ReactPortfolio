import React from "react";
import Logo from "../../assets/logo_kdb.png";
import { LogoImg } from "./LogoComponent.styles";

interface ILogoComponentProps {}

export default class LogoComponent extends React.Component<
  ILogoComponentProps
> {
  render() {
    return (
      <div>
        <LogoImg>
        <img src={Logo} className="header-logo" alt="logo_kim" />
        </LogoImg>
      </div>
    );
  }
}
