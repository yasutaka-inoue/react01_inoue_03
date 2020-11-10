import React from "react";
import styled from "styled-components";
import ImgPath from "./img/header_logo.png";

const HeaderAll = styled.div`
    background-color: white;
    width: 100%;
    height: 120px;
    position: fixed;
    z-index: 10;
`;
const HeaderList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    height: 120px;
    margin: 0 auto;
`;

const HeaderLogo = styled.div`
    width: 270px;
    padding: 30px;
`;

const NavList = styled.ul`
    display: flex;
    font-size: 21px;
    padding-right: 30px;
`;

const NavAnchor = styled.a`
    display: block;
    margin: 50px 0 50px 50px;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
`;

const Space = styled.div`
    padding-bottom: 120px;
`;

const Header = () => {
    return (
        <>
        <header id="header">
            <HeaderAll>
            <HeaderList>
                <HeaderLogo>
                    <a href="#header"><img src={ImgPath} alt="チーズアカデミーのロゴ"/></a>
                </HeaderLogo>
                <NavList>
                    <li><NavAnchor href="#about">about</NavAnchor></li>
                    <li><NavAnchor href="#course">course</NavAnchor></li>
                    <li><NavAnchor href="#news">news</NavAnchor></li>
                    <li><NavAnchor href="#access">access</NavAnchor></li>
                    <li><NavAnchor href="#contact">contact</NavAnchor></li>
                </NavList>
            </HeaderList>
            </HeaderAll>
        </header>
        <Space></Space>
        </>
    )
}

export default Header
