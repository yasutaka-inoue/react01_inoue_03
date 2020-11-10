import React from 'react'
import styled from "styled-components";

const FooterItem = styled.div`
    background-color: #707070;
    height: 76px;
    margin-top: 140px;
    width: 100%;
`;

const Copyright = styled.p`
    padding: 30px 0 30px 0;
    text-align: center;
    color: white;
    font-size: 16px;
`;

const Footer = () => {
    return (
        <>
            <FooterItem>
                <Copyright>copyrights 2016 Cheeese Academy Tokyo All RIghts Reserved.</Copyright>
            </FooterItem>
        </>
    )
}

export default Footer
