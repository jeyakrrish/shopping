import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div `
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background: linear-gradient(to right, #c2e59c, #64b3f4);
`
export const LogoContainer = styled.div `
  height: "100%";
  width: 70px;
  margin-top: -6px;

`

export const NavLinksContainer = styled.div `
width: "50 %";
  height: "100 %";
   display: flex;
   align-items: "center";
   justify-content: flex - end;
`
export const NavLinkContainer = styled(Link) `
    padding: 20px 10px;
    cursor: pointer;
`
export const Logo = styled.div `
  margin-bottom: 0px;
  padding-top:5px;
`
