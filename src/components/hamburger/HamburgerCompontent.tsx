import React from "react";
import { StyledHamburger } from "./HamburgerComponent.styles";

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
};

const HamburgerComponent = (props: Props) => (
  <StyledHamburger
    open={props.open}
    onClick={() => props.setOpen(!props.open)}
  >
    <div />
    <div />
    <div />
  </StyledHamburger>
);
export default HamburgerComponent;