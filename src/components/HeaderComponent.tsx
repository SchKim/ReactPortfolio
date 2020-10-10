import React from "react";
import { HeaderContainer} from "../styles";
import { EL, El1, El2, El3, El4 } from "../styles";
import  Logo  from "../assets/logo_kdb.png";

interface IHeaderComponentProps {}

console.log(Logo)

export default class HeaderComponent extends React.Component<
  IHeaderComponentProps
> {
  render() {
    return (
      <HeaderContainer>
        <EL><img src={Logo} className="header-logo" alt="logo_kim"/></EL>
        <El1>Home</El1>
        <El2>About</El2>
        <El3>Work</El3>
        <El4>Contact</El4>
      </HeaderContainer>
    );
  }
}
