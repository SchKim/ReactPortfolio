import React, { useState, useRef } from "react";

import HamburgerComponent from "../hamburger/HamburgerCompontent";
import { StyledMenu, StyledLink } from "./MenuComponent.styled"

import { useOnClickOutside } from "../../hooks";



const MenuComponent = () => {
  const [open, setOpen] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);
  const close = () => setOpen(false);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div ref={node}>
      <StyledMenu open={open}>
        <StyledLink onClick={() => close()}>About</StyledLink>
        <StyledLink onClick={() => close()}>Work</StyledLink>
        <StyledLink onClick={() => close()}>Contact</StyledLink>
      </StyledMenu>
      <HamburgerComponent open={open} setOpen={setOpen} />
    </div>
  );
};

export default MenuComponent;