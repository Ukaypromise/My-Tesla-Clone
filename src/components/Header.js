import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import { selectCars } from "../features/mycars/carSlice";
// import { useSelector } from "react-redux";

function Header() {
  const [bugerStatus, setBurgerStatus] = useState(false);

  return (
    <Container>
      <a href="">
        <img src="/images/logo.svg" alt="" />{" "}
      </a>
      <Menu>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panel</a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={bugerStatus}>
        <WrapClose>
          <CloseButton onClick={() => setBurgerStatus(false)} />
        </WrapClose>

        <li>
          <a href="#">Existing Inventry</a>
        </li>
        <li>
          <a href="#">Used Inventry</a>
        </li>
        <li>
          <a href="#">Trade-In</a>
        </li>
        <li>
          <a href="#">Test Drive</a>
        </li>
        <li>
          <a href="#">Cyber Truck</a>
        </li>
        <li>
          <a href="#">Roadster</a>
        </li>
        <li>
          <a href="#">Semi</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Powerwall</a>
        </li>
        <li>
          <a href="#">Comercial Energy</a>
        </li>
        <li>
          <a href="#">Utilities</a>
        </li>
        <li>
          <a href="#">Find Us</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Investor Relation</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 500;
    padding: 10px 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
  a:hover {
      background-color: #ddd;
      border-radius: 10px;
      opacity: 0.65;
      
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 500;
    margin-right: 10px;
    flex-wrap: nowrap;
    padding: 10px 10px;
  }
  a:hover {
      background-color: #ddd;
      border-radius: 10px;
      opacity: 0.65;
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 40px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;
  li {
    padding: 15px 0;
    font-size: 14px;

    a {
      font-weight: 600;
      padding: 10px 40px;
    }
    a:hover {
      background-color: #ddd;
      border-radius: 100px;
      opacity: 0.85;
      width: 200px;
    }
  }
`;

const CloseButton = styled(CloseIcon)`
  cursor: pointer;
`;
const WrapClose = styled.div`
  display: flex;
  justify-content: flex-end;
`;
