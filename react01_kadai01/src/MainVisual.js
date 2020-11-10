import React from "react";
import styled from "styled-components";
import "./style.css";

const TitleCatch = styled.h1`
    color: white;
    font-size: 40px;
    font-weight: bold;
    padding: 175px 0 30px 0;
    text-align: center;
`;

const PageTitle = styled.h2`
    color: white;
    font-size:30px;
    padding:0 0 175px;
    text-align: center;
`;

const Mainvisual = () => {
    return (
        <>
            <div className="mainvisual">
                <TitleCatch>セカイを変えるチーズを作ろう</TitleCatch>
                <PageTitle>チーズ職人養成学校「チーズアカデミーTOKYO」</PageTitle>
            </div>
        </>
    )
}

export default Mainvisual
