import  styled  from "styled-components";
import { colors } from "../../global";


export const StyledMenu = styled.nav<{ open: boolean }>`
  top: 0;
  left: 0;
  height: 100vh;
  width: 35vw;
  position: fixed;
  background-color: ${colors.deepblue};
  z-index: 1;

  display: flex;
  padding: 10rem 0;
  flex-direction: column;

  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) =>
    (open ? "translateX(0)" :"translateX(-100%)")};


    @media (max-width: 600px) {
        width: 100%;
      }
`;

// display: ${({ open }) => (open ? "flex" : "none")};

export const StyledLink = styled.a`
  padding: 0 2rem;
  font-size: 1.5rem;
  color: ${colors.pink};
  text-decoration: none;
  
  :hover {
    color: ${colors.creme};
  }
`;