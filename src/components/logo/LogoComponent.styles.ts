import styled from "styled-components";


 export const LogoImg = styled.button`

 position: fixed;
  right: 3vw;
  top: 3vw;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
 display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 0;
 
 
 @media (max-width: 600px) {
    float: left;
  }
  
  `;

  // height zit in app.css .header-logo 